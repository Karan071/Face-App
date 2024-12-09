from fastapi import FastAPI, HTTPException, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from pymilvus import connections, Collection, DataType, CollectionSchema, FieldSchema, utility
from deepface import DeepFace
import numpy as np
from io import BytesIO
from PIL import Image, UnidentifiedImageError
import json
import os
import base64
import uvicorn
import time

# Suppress TensorFlow warnings
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "3"

app = FastAPI(
    title="Face Recognition",
    description="Backend for Face Recognition App",
    version="0.1"
)

# CORS Settings
origins = ["https://localhost:5174", "https://localhost:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MILVUS_HOST="localhost"
# MILVUS_HOST="milvus-standalone"
MILVUS_PORT = "19530"

def connect_to_milvus():
    attempts = 5
    for _ in range(attempts):
        try:
            connections.connect("default", host=MILVUS_HOST, port=MILVUS_PORT)
            print("Connected to Milvus successfully")
            return
        except Exception as e:
            print(f"Connection failed: {e}")
            time.sleep(5)  # Retry after a delay

connect_to_milvus()

# Model Configuration
MODEL_NAME = "VGG-Face"

# Milvus collection schema
EMPLOYEE_COLLECTION = "employee_embeddings"
VISITOR_COLLECTION = "visitor_embeddings"

def create_milvus_collection(collection_name):
    """Create a Milvus collection with metadata and embedding fields."""
    if not utility.has_collection(collection_name):
        schema = CollectionSchema(
            fields=[
                FieldSchema(name="id", dtype=DataType.INT64, is_primary=True, auto_id=True),
                FieldSchema(name="name", dtype=DataType.VARCHAR, max_length=255),
                FieldSchema(name="age", dtype=DataType.INT64),
                FieldSchema(name="gender", dtype=DataType.VARCHAR, max_length=10),
                FieldSchema(name="photo_base64", dtype=DataType.VARCHAR, max_length=65535),
                FieldSchema(name="embedding", dtype=DataType.FLOAT_VECTOR, dim=4096),
            ],
            description=f"{collection_name} for storing embeddings"
        )
        collection = Collection(name=collection_name, schema=schema)
        collection.load()
    else:
        collection = Collection(collection_name)
    return collection

# Initialize Milvus collections

employee_collection = create_milvus_collection(EMPLOYEE_COLLECTION)
visitor_collection = create_milvus_collection(VISITOR_COLLECTION)

@app.get("/")
def backend_init():
    return {"backend": "Backend running successfully with Milvus"}

def preprocess_image(photo_bytes: bytes):
    """Preprocess image: Validate, resize, and normalize."""
    try:
        photo = Image.open(BytesIO(photo_bytes))
        if photo.mode != "RGB":
            photo = photo.convert("RGB")
        photo = photo.resize((224, 224))
        return np.array(photo)
    except UnidentifiedImageError:
        raise HTTPException(status_code=400, detail="Uploaded file is not a valid image")

def extract_face_embedding(photo_bytes: bytes):
    """Extract face embedding using DeepFace with VGG-Face model."""
    try:
        photo_array = preprocess_image(photo_bytes)
        embedding = DeepFace.represent(
            img_path=photo_array, model_name=MODEL_NAME, enforce_detection=False
        )
        if len(embedding) > 0 and "embedding" in embedding[0]:
            return embedding[0]["embedding"]
        raise ValueError("No embedding found in the model output.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error extracting embedding: {str(e)}")

def save_to_milvus(collection_name, name, age, gender, photo_base64, embedding):
    """Save data to Milvus."""
    collection = Collection(collection_name)
    data = [
        [None],  # Auto ID
        [name],
        [age],
        [gender],
        [photo_base64],
        [embedding]
    ]
    collection.insert(data)

@app.post("/register-employee/")
async def register_employee(
    name: str = Form(...), age: int = Form(...), gender: str = Form(...), photo: UploadFile = None
):
    try:
        photo_bytes = await photo.read()
        photo_base64 = base64.b64encode(photo_bytes).decode("utf-8")
        embedding = extract_face_embedding(photo_bytes)
        save_to_milvus(EMPLOYEE_COLLECTION, name, age, gender, photo_base64, embedding)
        return {"message": "Employee registered successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error during employee registration: {str(e)}")

@app.post("/register-visitor/")
async def register_visitor(
    name: str = Form(...), age: int = Form(...), gender: str = Form(...), photo: UploadFile = None
):
    try:
        photo_bytes = await photo.read()
        photo_base64 = base64.b64encode(photo_bytes).decode("utf-8")
        embedding = extract_face_embedding(photo_bytes)
        save_to_milvus(VISITOR_COLLECTION, name, age, gender, photo_base64, embedding)
        return {"message": "Visitor registered successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error during visitor registration: {str(e)}")

def search_in_milvus(collection_name, query_embedding, threshold=0.85):
    """Search for similar embeddings in Milvus."""
    collection = Collection(collection_name)
    search_params = {"metric_type": "COSINE", "params": {"nprobe": 10}}
    results = collection.search(
        data=[query_embedding],
        anns_field="embedding",
        param=search_params,
        limit=1
    )
    if results and len(results[0]) > 0:
        match = results[0][0]
        if match.distance >= threshold:
            metadata = match.entity
            return {"name": metadata["name"], "similarity": match.distance}
    return {"message": "No match found"}

@app.post("/recognize-employee/")
async def recognize_employee(photo: UploadFile):
    try:
        photo_bytes = await photo.read()
        uploaded_embedding = extract_face_embedding(photo_bytes)
        result = search_in_milvus(EMPLOYEE_COLLECTION, uploaded_embedding)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error in face recognition: {str(e)}")

@app.post("/recognize-visitor/")
async def recognize_visitor(photo: UploadFile):
    try:
        photo_bytes = await photo.read()
        uploaded_embedding = extract_face_embedding(photo_bytes)
        result = search_in_milvus(VISITOR_COLLECTION, uploaded_embedding, threshold=0.6)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error in face recognition: {str(e)}")

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)

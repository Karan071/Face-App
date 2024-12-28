import React, { useRef, useState } from "react";
import Webcam from 'react-webcam';
import VisionEdge from "../utils/VisionEdge";
import { Link } from "react-router-dom";
import axios from "axios";

const CheckInVisitor = () => {
  const webcamRef = useRef(null); // Ref for the webcam
  const [capturedImage, setCapturedImage] = useState(null); // State to store captured image

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot(); // Capture the photo
    setCapturedImage(imageSrc); // Store the captured image
  };
  // // Backend integration
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!capturedImage) {
  //     alert("Please capture the photo for recognition");
  //     return;
  //   }

  //   try {
  //     // Convert the base64 image to a Blob
  //     const photoBlob = await fetch(capturedImage).then((res) => res.blob());
  //     const formData = new FormData();
  //     formData.append("photo", photoBlob, "photo.jpg");

  //     // Send the photo to the backend
  //     const response = await axios.post(
  //       "http://localhost:8000/recognize-visitor/",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     // Handle the response
  //     if (response.data.success) {
  //       alert("Visitor recognized successfully!");
  //     } else {
  //       alert("Recognition failed. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error during submission:", error);
  //     alert("An error occurred. Please try again.");
  //   }
  // };


    //backend integrations
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!capturedImage) { 
      alert("Please capture the photo for recognization") 
      return;
    }

    try {
      //photo base64 to blob
      const photoBlob = await fetch(capturedImage).then((res) => res.blob());
      const formData = new FormData()
      formData.append("photo", photoBlob, 'photo.jpg');


      const response = await axios.post("http://localhost:8000/recognize-visitor/",formData, {
        headers : {
          "Content-Type" : "multipart/form-data",
        },
      });
      const { status, name, similarity, message } = response.data;

      if (status === "success") {
        alert(
          `Recognition successful! Name: ${name}, Similarity: ${similarity.toFixed(2)}`
        );
      } else {
        alert(
          `Recognition failed. ${message || "Please try again with a clearer photo."}`
        );
      }
    } catch (error) {
      console.error("Error during the submission :", error);
      alert(
        "An error occured. Please try again!"
      )
    }
  };


  return (
    <div>
      {/* Header */}
      <div className="flex flex-col items-center">

        <div className="text-center my-6">
          <p className="text-4xl font-semibold text-gray-700 font-poppins mt-2 bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            VisionEdge <span className='font-thin text-gray-700 '>Visitor Check-In System</span>
          </p>
        </div>



        {/* Webcam Section */}
        <div className="relative w-full max-w-screen-lg flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-4">
          {!capturedImage ? (
            <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            height={600}
            width={1000}
            className="rounded-lg shadow-md"
          />
          ) : (
            <img 
            src={capturedImage}
            alt="Captured"
            className="rounded-lg shadow-md"
            height={600}
            width={1000}
            />
          )}

          <div className="mt-6 text-center">
            <Link to="/register-visitor">
              <p className="text-lg font-medium">
                New Visitor here? Tap below to check yourself in!
              </p>
            </Link>
          </div>


          {!capturedImage ? (<button
            onClick={capturePhoto}
            type="button"
            className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3 transition-all duration-200 ease-in-out"
          >
            Capture Photo
          </button>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3 transition-all duration-200 ease-in-out"
            >
              Submit
            </button>
          )}

        </div>
      </div>
    </div >
  );
}

export default CheckInVisitor




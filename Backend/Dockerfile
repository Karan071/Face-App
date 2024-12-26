FROM python:3.9-slim

WORKDIR /app

# Install system dependencies and wait-for-it script
RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    libglib2.0-0 \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Generate Prisma client
RUN prisma generate

# Add a script to wait for PostgreSQL and then start the application
COPY start.sh .
RUN chmod +x start.sh

CMD ["./start.sh"] 
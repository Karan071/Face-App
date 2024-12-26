#!/bin/bash

# Wait for PostgreSQL to be ready
until PGPASSWORD=postgres psql -h postgres -U postgres -d my_database -c '\q'; do
  >&2 echo "PostgreSQL is unavailable - sleeping"
  sleep 1
done

>&2 echo "PostgreSQL is up - executing command"

# Run database migrations
prisma db push

# Start the application
exec uvicorn main:app --host 0.0.0.0 --port 8000 
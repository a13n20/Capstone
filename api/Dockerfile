FROM  python:3.8.13-bullseye

ENV PYTHONUNBUFFERED=1

WORKDIR /api

# copy from the current directory of the Dockerfile to /api in the image
COPY . .

RUN pip install -r requirements.txt
RUN chmod +x /api/download_files.sh && /api/download_files.sh

EXPOSE 8000
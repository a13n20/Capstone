FROM python:3.12-slim

ENV PYTHONUNBUFFERED=1

WORKDIR /api

COPY . .

RUN pip install -r requirements.txt
RUN chmod +x /api/download_files.sh && /api/download_files.sh

ENV PORT=8080

EXPOSE 8080

CMD ["gunicorn", "--bind", "0.0.0.0:8080", "project.wsgi"]

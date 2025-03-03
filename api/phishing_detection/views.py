from django.http import JsonResponse
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
import os

from .models import detect_phishing

@api_view(["POST"])
@parser_classes([MultiPartParser, FormParser])
def upload_email_file(request):
    if "file" not in request.FILES:
        return JsonResponse({"error": "No file uploaded"}, status=400)

    uploaded_file = request.FILES["file"]
    print(f"Received file: {uploaded_file.name}, size: {uploaded_file.size}")
    
    file_content = uploaded_file.read().decode("utf-8")
    print(f"File content (first 100 characters): {file_content[:100]}")

    result = detect_phishing(file_content)
    print(f"Model result: {result}")
    return JsonResponse({"prediction": result})
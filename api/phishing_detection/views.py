from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from rest_framework.parsers import MultiPartParser
import io
import email

from .models import detect_phishing

@csrf_exempt
@require_POST
def detect_phishing_view(request):
    try:
        data = json.loads(request.body)
        text = data.get("text", "")
        if text:
            result = detect_phishing(text)
            return JsonResponse({"result": result})
        else:
            return JsonResponse({"error": "No text provided"}, status=400)
    except Exception as e:
        return JsonResponse({"error": f"Failed to analyze text: {str(e)}"}, status=500)
    return JsonResponse({"message": "Phishing analysis complete"})

@csrf_exempt
@require_POST
def upload_email_view(request):
    if "file" not in request.FILES:
        return JsonResponse({"error": "No file provided"}, status=400)

    uploaded_file = request.FILES["file"]
    
    try:
        msg = email.message_from_bytes(uploaded_file.read())

        email_text = ""
        if msg.is_multipart():
            for part in msg.walk():
                content_type = part.get_content_type()
                if content_type == "text/plain":
                    email_text += part.get_payload(decode=True).decode("utf-8", errors="ignore")
        else:
            email_text = msg.get_payload(decode=True).decode("utf-8", errors="ignore")

        if not email_text.strip():
            return JsonResponse({"error": "Email contains no text"}, status=400)

        result = detect_phishing(email_text)

        return JsonResponse({"result": result})

    except Exception as e:
        return JsonResponse({"error": f"Failed to analyze email: {str(e)}"}, status=500)
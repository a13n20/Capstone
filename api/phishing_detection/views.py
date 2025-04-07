from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from rest_framework.parsers import MultiPartParser
import io
import email
from bs4 import BeautifulSoup

from .models import detect_phishing

@csrf_exempt
@require_POST
def detect_phishing_view(request):
    try:
        data = json.loads(request.body)
        text = data.get("text", "")
        if text:
            result = detect_phishing(text)
            return JsonResponse({"is_phishing": result})
        else:
            return JsonResponse({"error": "No text provided"}, status=400)
    except Exception as e:
        return JsonResponse({"error": f"Failed to analyze text: {str(e)}"}, status=500)
    return JsonResponse({"message": "Phishing analysis complete"})

def extract_text_from_html(html_content):
    soup = BeautifulSoup(html_content, "html.parser")

    for script in soup(["script", "style"]):
        script.extract()

    text = soup.get_text(separator="\n").strip()
    return text

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
                content_disposition = str(part.get("Content-Disposition"))
                
                if "attachment" in content_disposition:
                    continue 

                payload = part.get_payload(decode=True)
                if payload:
                    decoded_payload = payload.decode("utf-8", errors="ignore")
                    if content_type == "text/plain":
                        email_text += decoded_payload
                    elif content_type == "text/html":  
                        email_text += extract_text_from_html(decoded_payload)
        else:
            payload = msg.get_payload(decode=True)
            if payload:
                decoded_payload = payload.decode("utf-8", errors="ignore")
                if msg.get_content_type() == "text/html":
                    email_text = extract_text_from_html(decoded_payload)
                else:
                    email_text = decoded_payload

        if not email_text.strip():
            return JsonResponse({"error": "Email contains no text"}, status=400)

        result = detect_phishing(email_text)

        return JsonResponse({"result": result})

    except Exception as e:
        return JsonResponse({"error": f"Failed to analyze email: {str(e)}"}, status=500)
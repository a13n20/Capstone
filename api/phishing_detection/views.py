from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

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
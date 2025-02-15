from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from transformers import pipeline

MODEL_PATH = os.path.join(os.path.dirname(__file__), "phish_detect_V1")
phishing_detector = pipeline("text-classification", model=MODEL_PATH)

@api_view(["POST"])
def detect_phishing(request):
    text = request.data.get("text", "")
    if not text:
        return Response({"error": "No text provided"}, status=400)

    result = phishing_detector(text)
    return Response({"prediction": result})
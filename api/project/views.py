from django.http import JsonResponse
from datetime import datetime
import requests
from django.http import JsonResponse
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests
from django.conf import settings
from django.contrib.auth.models import User
from newsapi import NewsApiClient

GOOGLE_CLIENT_ID = "848546903722-vrqli9718kbhjjlm13iu2888q16nd2h2.apps.googleusercontent.com"

def index(request):
    current_time = datetime.now().strftime("%-I:%S %p")
    current_date = datetime.now().strftime("%A %m %-Y")

    data = {
        'time': current_time,
        'date': current_date,
    }

    return JsonResponse(data)

def google_login(request):
    token = request.GET.get("token") 

    if not token:
        return JsonResponse({"error": "Token is missing"}, status=400)

    try:
        id_info = id_token.verify_oauth2_token(token, google_requests.Request(), GOOGLE_CLIENT_ID)

        if id_info["iss"] not in ["accounts.google.com", "https://accounts.google.com"]:
            return JsonResponse({"error": "Invalid token issuer"}, status=400)

        email = id_info["email"]
        name = id_info.get("name", "Google User")
        user, created = User.objects.get_or_create(username=email, defaults={"first_name": name, "email": email})

        return JsonResponse({"message": "Login successful", "email": email, "name": name})

    except ValueError:
        return JsonResponse({"error": "Invalid token"}, status=400)

def cyber_news(request):
    api_key = 'fea68d2f6e5245b0ae80dda126a365f7'
    newsapi = NewsApiClient(api_key=api_key)

    try:
        top_headlines = newsapi.get_everything(
            q='cybersecurity',
            language='en',
        )
        return JsonResponse(top_headlines, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
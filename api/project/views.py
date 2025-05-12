from django.http import JsonResponse
from datetime import datetime
import requests
from newsapi import NewsApiClient
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
import json
from google.oauth2 import id_token
from google.auth.transport import requests
from django.http import JsonResponse
from django.contrib.auth import login, logout
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def google_login(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        token = body.get('token')

        try:
            idinfo = id_token.verify_oauth2_token(token, requests.Request())

            email = idinfo['email']
            first_name = idinfo.get('given_name', '')
            last_name = idinfo.get('family_name', '')

            user, _ = User.objects.get_or_create(email=email, defaults={
                'username': email,
                'first_name': first_name,
                'last_name': last_name,
            })

            user.backend = 'allauth.account.auth_backends.AuthenticationBackend'
            login(request, user)
            return JsonResponse({'message': 'Login successful', 'email': email})
        
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request'}, status=400)

@csrf_exempt
def google_logout(request):
    if request.method == 'POST':
        logout(request)
        return JsonResponse({'message': 'Logged out'})
    return JsonResponse({'error': 'Invalid request'}, status=400)

def post_login_redirect(request):
    return redirect('https://react-frontend-848546903722.us-central1.run.app')

def post_logout_redirect(request):
    return redirect('https://react-frontend-848546903722.us-central1.run.app')

@csrf_exempt
def check_login(request):
    print(f"[check_login] sessionid: {request.COOKIES.get('sessionid')}")
    print(f"[check_login] user: {request.user}, auth: {request.user.is_authenticated}")
    return JsonResponse({'is_authenticated': request.user.is_authenticated})

def index(request):
    current_time = datetime.now().strftime("%-I:%S %p")
    current_date = datetime.now().strftime("%A %m %-Y")

    data = {
        'time': current_time,
        'date': current_date,
    }

    return JsonResponse(data)

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

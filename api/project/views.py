from django.http import JsonResponse
from datetime import datetime
import requests
from newsapi import NewsApiClient
from django.shortcuts import redirect

def post_login_redirect(request):
    return redirect('https://react-frontend-848546903722.us-central1.run.app')

def post_logout_redirect(request):
    return redirect('https://react-frontend-848546903722.us-central1.run.app')

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
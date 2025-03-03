from django.urls import path
from . import views

urlpatterns = [
    path('detect_phishing/', views.detect_phishing, name='detect_phishing'),
]

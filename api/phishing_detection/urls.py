from django.urls import path
from . import views

urlpatterns = [
    path('detect/', views.detect_phishing_view, name='detect_phishing'),
]

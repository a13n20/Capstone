from django.urls import path
from .views import detect_phishing

urlpatterns = [
    path("detect/", detect_phishing, name="detect_phishing"),
]

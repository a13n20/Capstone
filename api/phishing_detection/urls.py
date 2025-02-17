from django.urls import path
from .views import detect_phishing, upload_email_file

urlpatterns = [
    path("detect/", detect_phishing, name="detect_phishing"),
    path("upload/", upload_email_file, name="upload_email_file"),
]

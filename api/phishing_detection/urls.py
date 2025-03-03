from django.urls import path
from . import views

urlpatterns = [
    path('detect/', views.detect_phishing_view, name='detect_phishing'),
    path('upload/', views.upload_email_view, name='upload_email'),
]

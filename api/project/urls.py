"""
URL configuration for project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from .views import index, cyber_news, post_login_redirect, post_logout_redirect, check_login, google_login, google_logout

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path("api/phishing/", include("phishing_detection.urls")),
    path("api/passwordaid/", include("password_aid.urls")),
    path('api/cybernews/', cyber_news, name='cyber_news'),
     path('post-login/', post_login_redirect, name='post_login'),
    path('post-logout/', post_logout_redirect, name='post_logout'),
    path('api/check-login/', check_login, name='check_login'),
     path('api/google-login/', google_login),
     path('api/google-logout/', google_logout, name='google_logout'),
    path('accounts/', include('allauth.urls')),
]


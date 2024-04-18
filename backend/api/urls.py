from django.urls import path,include
from .views import UserSigninView,UserSignupView

urlpatterns = [
    path('signin', UserSigninView.as_view()),
    path('signup', UserSignupView.as_view()),
]
from django.urls import path 
from . import views
# from .views import my_application

urlpatterns = [
    path('my_application/', views.my_application, name='my_application'),
]

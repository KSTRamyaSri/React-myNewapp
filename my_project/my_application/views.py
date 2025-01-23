from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def my_application(request) : 
    return HttpResponse("Hello, world. I am my_application.")


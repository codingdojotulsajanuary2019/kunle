from django.shortcuts import render, render

def index(request):
    return render(request, "users_app/index.html")

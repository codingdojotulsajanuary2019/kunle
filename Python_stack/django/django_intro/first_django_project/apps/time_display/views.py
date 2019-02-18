from django.shortcuts import render, redirect
from time import gmtime, strftime

def index(request):
    context = {
        "time": strftime("%a %d, %Y %H:%M:%S %p", gmtime())
    }
    return render(request, 'time_display/index.html', context)



 
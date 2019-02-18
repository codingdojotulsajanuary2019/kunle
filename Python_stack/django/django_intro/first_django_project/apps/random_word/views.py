from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string

def index(request):
    unique_id = get_random_string(length=14)
    print(unique_id)

    if 'count' in request.session:
        request.session['count'] += 1
    else: request.session['count'] = 1

    return render(request, 'random_word/index.html', {'context' : unique_id})

def reset(request):
    request.session['count'] = 0
    return redirect("/random_word")



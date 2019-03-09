from django.shortcuts import render, reverse, HttpResponseRedirect
from django.contrib import messages

from .models import User

def index(request):
    return render(request, 'challenge1/index.html')

def register(request):
    errors = User.objects.basic_validator(request.POST)
    if errors:
        for key, value in errors.items():
            messages.error(request, value, extra_tags=key)
        return HttpResponseRedirect(reverse('c1:index'))

    user = User.objects.create(name=request.POST.get('name'),
                               email=request.POST.get('email').lower(),
                               password=request.POST.get('password').encode())

    if user:
        set_session(request, user)
        return HttpResponseRedirect(reverse('c1:dashboard'))
    else:
        return HttpResponseRedirect(reverse('c1:index'))

def login(request):
    user = get_user_email(request.POST.get('email'))
    if user:
        if request.POST.get('password') == user.password.decode():
            set_session(request, user)
            return HttpResponseRedirect(reverse('c1:dashboard'))
    messages.error(request, "Bad Credentials!", extra_tags='login')
    return HttpResponseRedirect(reverse('c1:index'))

def show(request, uid):
    if 'user' in request.session:
        return render(request, 'challenge1/show.html',)
    return HttpResponseRedirect(reverse('c1:index'))

def dashboard(request):
    if 'user' in request.session:
        return render(request, 'challenge1/dashboard.html',)
    return HttpResponseRedirect(reverse('c1:index'))

def logout(request):
    request.session.flush()
    return HttpResponseRedirect(reverse('c1:index'))

def get_user_email(email):
    try:
        return User.objects.get(email=email.lower())
    except Exception:
        return False

def set_session(request, user):
    request.session['name'] = user.name
    request.session['user_id'] = user.id
    request.session['email'] = user.email
    request.session['password'] = user.password.decode()

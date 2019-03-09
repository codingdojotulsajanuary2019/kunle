from django.shortcuts import render, reverse, HttpResponseRedirect
from django.contrib import messages
from django.core.mail import send_mail
from django.db import connection, IntegrityError

from .models import User, Message

import bcrypt
from datetime import datetime

def index(request):
    return render(request, 'challenge3/index.html')

def register(request):
    errors = User.objects.basic_validator(request.POST)
    if errors:
        for key, value in errors.items():
            messages.error(request, value, extra_tags=key)
        return HttpResponseRedirect(reverse('c3:index'))

    try:
        hashpwd = bcrypt.hashpw(request.POST.get('password').encode(), bcrypt.gensalt())
        user = User.objects.create(name=request.POST.get('name'),
                                   email=request.POST.get('email').lower(),
                                   password=hashpwd)
    except IntegrityError:
        messages.error(request, "This email is already registered!", extra_tags='email')
        return HttpResponseRedirect(reverse('c3:index'))
    except Exception:
        messages.error(request, "Unable to process your request!", extra_tags='email')
        return HttpResponseRedirect(reverse('c3:index'))

    if user:
        set_session(request, user)
        return HttpResponseRedirect(reverse('c3:dashboard'))
    else:
        return HttpResponseRedirect(reverse('c3:index'))

def login(request):
    user = get_user_email(request.POST.get('email'))
    if user:
        if bcrypt.checkpw(request.POST.get('password').encode(), user.password):
            set_session(request, user)
            return HttpResponseRedirect(reverse('c3:dashboard'))
    messages.error(request, "Bad Credentials!", extra_tags='login')
    return HttpResponseRedirect(reverse('c3:index'))

def messages_create(request, uid):
    errors = Message.objects.create_validator(request.POST)

    if errors:
        for key, value in errors.items():
            messages.error(request, value, extra_tags=key)
        return HttpResponseRedirect(reverse('c3:dashboard'))

    subject = request.POST.get('subject', '')
    content = request.POST.get('content', '')
    poster_id = request.session.get('user_id', '')

    cursor = connection.cursor()
    query = """INSERT INTO challenge3_message (subject, content, poster_id, created_at, updated_at)
                      VALUES ('%s', '%s', '%s', '%s', '%s')""" % (subject, content, poster_id, datetime.now(), datetime.now())
    print('query:', query)
    cursor.execute(query)
    return HttpResponseRedirect(reverse('c3:dashboard'))

def dashboard(request):
    if not logged_in(request):
        messages.error(request, "Please log in", extra_tags='login')
        return HttpResponseRedirect(reverse('c3:index'))
    msgs = Message.objects.all()
    return render(request, 'challenge3/dashboard.html', {'msgs': msgs},)

def password_recovery(request):
    return render(request, 'challenge3/forgot.html')

def send_email(request):

    reset_link = 'localhost:8000/c3/passwordreset/{}'.format(request.POST.get('email'))
    send_mail(
        subject='Password Reset',
        message='Click the following link to reset your password: '+reset_link,
        from_email='test@email.com',
        recipient_list=[request.POST.get('email')],
        fail_silently=False,
    )
    messages.error(request, "Email Sent", extra_tags='login')
    return HttpResponseRedirect(reverse('c3:index'))

def reset_password(request, email):


    return render(request, 'challenge3/reset.html', {'email': email})

def submit_password_reset(request, email):
    try:
        user = User.objects.get(email=email)
    except Exception:
        messages(request, 'Invalid access.', extra_tags='login')
        return HttpResponseRedirect(reverse('c3:index'))
    else:
        errors = {}
        User.objects.check_pwd_confirm(request.POST, errors)
        if errors:
            for key, value in errors.items():
                messages.error(request, value, extra_tags='reset')
            return HttpResponseRedirect(reverse('c3:passwordreset', args=[email]))
        else:
            user.password = request.POST.get('password').encode()
            user.save()
            messages.error(request, 'Password Reset!', extra_tags='login')
            return HttpResponseRedirect(reverse('c3:index'))

def logout(request):
    request.session.flush()
    return HttpResponseRedirect(reverse('c3:index'))

def logged_in(request):
    return request.session.get('user_id')

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

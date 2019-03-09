from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User, UserManager
from apps import the_store
import bcrypt

def signin(request):
    return render(request, "my_users/sigin.html")

def register(request):
    return render(request, "my_users/signup.html")

def new_user(request):
    
    errors = User.objects.reg_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value, extra_tags=key)
        return redirect("/signup")

    else:
        if request.method == "POST":
            user = User.objects.filter(email = request.POST['email'])
            if user:
                print (user)
                messages.warning(request, "User already exist") 
                return redirect("/signup")

            hash_pw = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())

            new_user = User.objects.create(first_name = request.POST['f_name'], last_name = request.POST['l_name'], email = request.POST['email'], password = hash_pw)
            if new_user.id == 1:
                new_user.level = 9
                new_user.save()
            request.session['user_id'] = new_user.id
            request.session['user_name'] = new_user.first_name
            messages.success(request, "Successfully registered !")
            return redirect("/")

    return redirect("/signup")
    
def user_login(request):

    errors = User.objects.login_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value, extra_tags=key)
        return redirect("/signin")

    else:
        if request.method == "POST":
            this_user = User.objects.filter(email = request.POST['user_email']).values()
            print(this_user)
            if this_user:
                pw_hash = this_user[0]['password']            
                print(pw_hash)
                if bcrypt.checkpw(request.POST['user_password'].encode(), pw_hash.encode()):
                    request.session['user_name'] = this_user[0]['first_name']
                    request.session['user_id'] = this_user[0]['id']

                    messages.success(request, "Successfully logged in !")
                    return redirect("/")
                
            messages.info(request, "You cannot be logged in")
            return redirect("/signin")

    return redirect("/signin")

def admin_login(request):
    errors = User.objects.login_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value, extra_tags=key)
        return redirect("/admin")

    else:
        if request.method == "POST":
            this_user = User.objects.filter(email = request.POST['user_email']).values()
            print(this_user)
            if this_user.level == 9:
                pw_hash = this_user[0]['password']            
                print(pw_hash)
                if bcrypt.checkpw(request.POST['user_password'].encode(), pw_hash.encode()):
                    request.session['user_name'] = this_user[0]['first_name']
                    request.session['user_id'] = this_user[0]['id']

                    messages.success(request, "Successfully logged in !")
                    return redirect("/dashboard")
                
            messages.info(request, "You cannot be logged in")
            return redirect("/admin")


def user_logout(request):
    
    request.session.clear()

    return redirect("/")
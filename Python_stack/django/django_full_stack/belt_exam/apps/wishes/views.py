from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User, UserManager, Wish
from datetime import datetime
import bcrypt

def index(request):    
    return render(request, "wishes/index.html")

def new_user(request):
    
    errors = User.objects.reg_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value, extra_tags=key)
        return redirect("/")

    else:
        if request.method == "POST":
            user = User.objects.filter(email = request.POST['email'])
            if user:
                print (user)
                messages.warning(request, "User already exist") 
                return redirect("/")

            hash_pw = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())

            new_user = User.objects.create(first_name = request.POST['f_name'], last_name = request.POST['l_name'], email = request.POST['email'], password = hash_pw)
            
            request.session['user_id'] = new_user.id
            request.session['user_name'] = new_user.first_name
            messages.success(request, "Successfully registered !")
            return redirect("/wishes")

    return redirect("/")

def user_login(request):

    errors = User.objects.login_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value, extra_tags=key)
        return redirect("/")

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
                    return redirect("/wishes")
                
            messages.info(request, "You cannot be logged in")
            return redirect("/")

    return redirect("/")

def user_logout(request):    
    request.session.clear()
    return redirect("/")

def all_wishes(request):
    if "user_name" in request.session:
        this_user = User.objects.get(id = request.session['user_id'])

        context = {       
            "all_wishes" : Wish.objects.filter(granted_at__isnull =True, user=this_user),
            "granted_wishes" : Wish.objects.exclude(granted_at__isnull =True)
        }
        return render(request, "wishes/wishes.html", context)

    else:
        messages.info(request, "You must be logged in to enter the website")
        return redirect("/")

def new_wish(request):
    if "user_name" in request.session:
        return render(request, "wishes/add_wish.html")
    else:
        messages.info(request, "You must be logged in to enter the website")
        return redirect("/")

def add_wish(request):
    errors = User.objects.wish_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value, extra_tags=key)
        return redirect("/wishes/new")
    else:
        this_user = User.objects.get(id=request.session['user_id'])
        Wish.objects.create(item= request.POST['users_wish'], description = request.POST['desc'], user = this_user)
        return redirect("/wishes")

def destroy_wish(request, wish_id):
        wish_to_delete = Wish.objects.get(id=wish_id)
        wish_to_delete.delete()  
        return redirect("/wishes")

def edit_wish(request, wish_id):
    if "user_name" in request.session:

        context = {
            "this_wish" : Wish.objects.get(id=wish_id)
        }
        return render(request, "wishes/edit.html", context)
    else:
        messages.info(request, "You must be logged in to enter the website")
        return redirect("/")

def grant_wish(request, wish_id):
    wish_granted = Wish.objects.get(id=wish_id)
    wish_granted.granted_at = datetime.now()
    wish_granted.save()

    return redirect("/wishes")

def update_wish(request, wish_id):

    errors = User.objects.wish_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value, extra_tags=key)
        return redirect(f"/wishes/edit/{wish_id}")
    else:
        if request.method == "POST":
            wish_to_update = Wish.objects.get(id=wish_id)
            wish_to_update.item = request.POST['users_wish'] 
            wish_to_update.description = request.POST['desc'] 
            wish_to_update.save()

    return redirect("/wishes")

def like_wish(request, wish_id):

    this_wish = Wish.objects.get(id=wish_id)
    this_user = User.objects.get(id=request.session['user_id'])
    this_user.wish_liked.add(this_wish)

    return redirect("/wishes")

def cancel(request):
    return redirect("/wishes") 

def stats(request):

    this_user = User.objects.get(id=request.session['user_id'])

    all_stats = Wish.objects.all().exclude(granted_at__isnull =True)

    count = this_user.wishes.exclude(granted_at__isnull =True)


    context = {
        "this_user" : User.objects.get(id=request.session['user_id']),
        "all_stats" : Wish.objects.all().exclude(granted_at__isnull =True)
    }
    return render(request, "wishes/stats.html", context,  {"count":count})

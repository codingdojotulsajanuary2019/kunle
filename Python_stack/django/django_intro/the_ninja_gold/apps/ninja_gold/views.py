from django.shortcuts import render, redirect
from random import randint

def index(request):
    if 'total' in request.session:
        request.session['total'] += 0
    else:
        request.session['total']=0

    if 'message' in request.session:
        request.session['message'] += ""
    else: request.session['message'] = ""
    print(request.session['message'])
    
    return render(request, "ninja_gold/index.html")

def process_money(request):
    if request.method == "POST":
        if request.POST["gold"] =="cave":
            number = randint(5,10)
            request.session['total'] += number
            request.session['message'] = f"<li>You earned {number} gold from the cave</li>"+request.session['message']

        if request.POST["gold"] =="farm":
            number = randint(10,20)
            request.session['total'] += number
            request.session['message'] = f"<li>You earned {number} gold from the farm</li>"+request.session['message']

        if request.POST["gold"] =="house":
            number = randint(1,5)
            request.session['total'] += number
            request.session['message'] = f"<li>You earned {number} gold from the casin0</li>"+request.session['message']
            
        if request.POST["gold"] =="casino":
            number = randint(-50,50)
            request.session['total'] += number
            if number > 0:
                request.session['message'] = f"<li>You earned {number} gold from the casino</li>"+request.session['message']
            else: request.session['message'] = f"<li class='loss'>You lost {number} gold at the casino</li>"+request.session['message']
    
    return redirect("/")

def reset(request):
    request.session.clear()
    return redirect("/")


   

    
    
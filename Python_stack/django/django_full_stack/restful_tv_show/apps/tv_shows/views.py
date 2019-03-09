from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Show

def root(request):
    return redirect("/shows")

def index(request):
    context = {
        "all_shows" : Show.objects.all()
    }
    return render(request, "tv_shows/index.html", context)


def add_show(request):
    return render(request, "tv_shows/add_show.html")

def create_show(request):

    # errors = Show.objects.basic_validator(request.POST)
    # if len(errors) > 0:
    #     for key, value in errors.items():
    #         messages.error(request, value, extra_tags=key)
    #     return redirect("/shows/new")

    # else: 
    if request.method == "POST":
        found = False
        show_to_add = Show.objects.filter(title = request.POST['showtitle'])
        if show_to_add:          
            found = True
        return render(request, "tv_shows/partials/shows.html", {"found" : found})

        new_show = Show.objects.create(title = request.POST['showtitle'], network = request.POST['shownetwork'], description = request.POST['desc'], release_date = request.POST['rel_date'])
        
        return redirect(f"/shows/{new_show.id}")

def show_info(request, show_id):
    context = {
        "show_info" : Show.objects.get(id=show_id)
    }
    return render(request, "tv_shows/show.html", context)

def edit_show(request, show_id):
    context = {
        "this_show" : Show.objects.get(id=show_id)
    }
    return render(request, "tv_shows/edit_show.html", context)

def update_show(request, show_id):

    errors = Show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value, extra_tags=key)
        return redirect(f"/shows/{show_id}/edit")
    else:
        if request.method == "POST":
            show_to_update = Show.objects.get(id=show_id)
            show_to_update.title = request.POST['showtitle'] 
            show_to_update.network = request.POST['shownetwork'] 
            show_to_update.description = request.POST['desc'] 
            show_to_update.release_date = request.POST['rel_date']
            show_to_update.save()

    return redirect(f"/shows/{show_id}")

def delete_show(request, show_id):
    show_to_delete = Show.objects.get(id=show_id)
    show_to_delete.delete()
    
    return redirect("/shows")


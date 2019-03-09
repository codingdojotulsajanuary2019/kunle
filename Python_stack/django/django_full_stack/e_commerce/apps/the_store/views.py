from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User, Category, Product, Order, Cart
from django.views.decorators.csrf import csrf_exempt

def index(request): 
     context = {
          "all_products" : Product.objects.all(),
          "all_category": Category.objects.all()
     }
     return render(request, "the_store/index.html", context)

def dashboard(request):
     return render(request, "the_store/dash.html")

def all_products(request):
     context = {
          "all_products" : Product.objects.all()
     }
     return render(request, "the_store/products.html", context)

def new_product(request):
     context = {
          "all_category": Category.objects.all()
     }
     return render(request, "the_store/new_product.html", context)

def add_product(request):
     if request.POST['new_cat']:
          existing_cat= Category.objects.filter(name= request.POST['new_cat'])
          if existing_cat:
               found = True
               return redirect("/products/add")
          else:
               found = False
               this_category = Category.objects.create(name=request.POST['new_cat'])
          # return render(request, "the_store/partials/cat.html", {"found":found})

     if request.POST['category']:
          this_category = Category.objects.get(name=request.POST['category'])
    
     item = Product.objects.create(name= request.POST['name'], description= request.POST['desc'], price=request.POST['price'], quantity=request.POST['qty'], qty_on_hand=request.POST['qty'], Categories= this_category)

     return redirect("/products")

def edit(request, id):
     context = {
          "product": Product.objects.get(id=id),
          "all_category": Category.objects.all()
     }
     return render(request, "the_store/edit_product.html", context)

def cancel(request):
     return redirect("/products")

def preview(request, id):
     return render(request, "the_store/product.html")

def product(request, id):
     product= Product.objects.get(id=id) 
     return render(request, "the_store/product.html", {"product": product})

@csrf_exempt
def cart(request, id):
     des = request.POST['qty']
     print(des)
     found = False
     if "user" in request.session:
          this_user = User.objects.get(id=request.session['user_id'])
          this_product = Product.objects.get(id=id)
          cart = Cart.objects.filter(user=this_user)
          this_user.cart.add(this_product)
          found = True
          return render(request, "the_store/partials/cart.html", {"found": found})

     return render(request, "the_store/partials/cart.html", {"found": found})

def update(request, id):

     if request.POST['new_cat']:
          existing_cat= Category.objects.filter(name= request.POST['new_cat'])
          if existing_cat:
               found = True
               return redirect(f"/products/edit/{id}")
     else:
          found = False
          this_category = Category.objects.create(name=request.POST['new_cat'])

     if request.POST['category']:
          this_category = Category.objects.get(name=request.POST['category'])

     this_product = Product.objects.get(id = id)
     this_product.name = request.POST['name']
     this_product.description = request.POST['desc']
     this_product.Categories = this_category
     this_product.price = request.POST['price']
     this_product.save()

     return redirect("/products")

def delete(request, id):
     product_to_delete = Product.objects.get(id = id)
     product_to_delete.delete()

     return redirect("/products")

def order(request, id):
  return render(request, "the_store/order.html")

def ship_order(request, id):
  return redirect("/dashboard/order/{id}")

def cancel_order(request, id):
  return redirect("/dashboard")

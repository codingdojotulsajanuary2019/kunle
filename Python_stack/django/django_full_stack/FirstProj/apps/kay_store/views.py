from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User, Category, Product, Order, Cart, Quantity
from django.views.decorators.csrf import csrf_exempt

def index(request): 
    if "user_id" in request.session:
        user = User.objects.filter(id=request.session['user_id'])
        context = {
            "UserCart" : Cart.objects.filter(user=user),
            "all_products" : Product.objects.all(),
            "all_category": Category.objects.all()
        }
        return render(request, "kay_store/index.html", context)

    context = {
          "all_products" : Product.objects.all(),
          "all_category": Category.objects.all()
    }
    return render(request, "kay_store/index.html", context)

def dashboard(request):
    if 'admin' in request.session:     
        return render(request, "kay_store/dash.html")
    return redirect("/")

def all_products(request):
    if 'admin' in request.session:
        context = {
            "all_products" : Product.objects.all()
        }
        return render(request, "kay_store/products.html", context)

    return redirect("/")

def new_product(request):
    if 'admin' in request.session:
        context = {
            "all_category": Category.objects.all()
        }
        return render(request, "kay_store/new_product.html", context)
    return redirect("/")

def add_product(request):
    if 'admin' in request.session:
        if request.method == "POST":
            if request.POST['new_cat']:
                existing_cat= Category.objects.filter(name= request.POST['new_cat'])
                if existing_cat:
                    found = True
                    return redirect("/products/add")
                else:
                    found = False
                    this_category = Category.objects.create(name=request.POST['new_cat'])
                # return render(request, "kay_store/partials/cat.html", {"found":found})

            if request.POST['category']:
                this_category = Category.objects.get(name=request.POST['category'])
            
            item = Product.objects.create(name= request.POST['name'], description= request.POST['desc'], price=request.POST['price'], quantity=request.POST['qty'], qty_on_hand=request.POST['qty'], Categories= this_category)
            return redirect("/products")

        return redirect("/products")
    return redirect("/")

def edit(request, id):
    if 'admin' in request.session:
        context = {
            "product": Product.objects.get(id=id),
            "all_category": Category.objects.all()
        }
        return render(request, "kay_store/edit_product.html", context)
    return redirect("/")

def cancel(request):
    if 'admin' in request.session:
        return redirect("/products")
    return redirect("/")
    

def preview(request, id):
     return render(request, "kay_store/product.html")

def product(request, id):
    if "user_id" in request.session:
        user = User.objects.filter(id=request.session['user_id'])
        context = {
            "UserCart" : Cart.objects.filter(user=user),
            "product" : Product.objects.get(id=id) 
        }
        return render(request, "kay_store/product.html", context)
    context = {
        "product" : Product.objects.get(id=id)
    }
    return render(request, "kay_store/product.html", context)

@csrf_exempt
def cart(request, id):
    des = int(request.POST['qty'])
    print(des)
    found = False
    if "user_name" in request.session:
        this_user = User.objects.get(id=request.session['user_id'])

        this_product = Product.objects.get(id=id)
        cart = Cart.objects.filter(user=this_user)

        if cart:
            cart[0].products.add(this_product)         
        else:
            user_cart = Cart.objects.create(user=this_user) 
            user_cart.products.add(this_product)
            Quantity.objects.create(quantity=des, product=this_product, cart= user_cart)
          
        found = True
        return render(request, "kay_store/partials/cart.html", {"found": found})

    return render(request, "kay_store/partials/cart.html", {"found": found})

def update(request, id):
    if 'admin' in request.session:
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

    return redirect("/")

def delete(request, id):
    if 'admin' in request.session:
        product_to_delete = Product.objects.get(id = id)
        product_to_delete.delete()
        return redirect("/products")
    return redirect("/")

def order(request, id):
  return render(request, "kay_store/order.html")

def ship_order(request, id):
  return redirect("/dashboard/order/{id}")

def cancel_order(request, id):
  return redirect("/dashboard")

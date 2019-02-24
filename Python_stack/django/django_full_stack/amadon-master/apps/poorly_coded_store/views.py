from django.shortcuts import render, redirect
from .models import Order, Product

def index(request):
    context = {
        "all_products": Product.objects.all()
    }
    return render(request, "store/index.html", context)

def checkout(request):

    ordered_product = Product.objects.get(id = request.POST["price"])
    price_from_form = float(ordered_product.price)

    quantity_from_form = int(request.POST["quantity"])
    
    total_charge = quantity_from_form * price_from_form
    print("Charging credit card...")

    order = Order.objects.create(quantity_ordered=quantity_from_form, total_price=total_charge)

    request.session['amount'] = order.total_price

    if "amount_spent" in request.session:
        request.session['amount_spent'] += (order.total_price)
    else:
        request.session['amount_spent'] = (order.total_price)

    if "total_order" in request.session:
        request.session['total_order'] += (order.quantity_ordered)
    else:
        request.session['total_order'] = (order.quantity_ordered)

    return redirect("/order")

def order_conf(request):

    return render(request, "store/checkout.html")
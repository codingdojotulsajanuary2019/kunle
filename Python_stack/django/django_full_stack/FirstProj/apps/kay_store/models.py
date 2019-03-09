from django.db import models
from apps.my_users.models import User

class Category(models.Model):
    name = models.CharField(max_length=45)

class Product(models.Model):
    name = models.CharField(max_length=45)
    description = models.CharField(max_length=225)
    price = models.DecimalField(decimal_places=2, max_digits=5)
    quantity = models.IntegerField(default=0)
    qty_sold = models.IntegerField(default=0)
    qty_on_hand = models.IntegerField()
    Categories = models.ForeignKey(Category, related_name="products")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __repr__(self):
        return f" name: {self.name}, desc: {self.description}, price: {self.price}, category: {self.Categories}"

class Order(models.Model):
    order_by = models.ForeignKey(User, related_name="orders")
    ordered_product =  models.ManyToManyField(Product, related_name="product_order") 
    total_price = models.DecimalField(decimal_places=2, max_digits=8)
    quantity = models.ForeignKey(Product, related_name="product_qty")
    status = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __repr__(self):
        return f" by: {self.order_by}, product: {self.ordered_product}, amount: {self.total_price}, qty: {self.quantity} status: {self.status}"

class Cart(models.Model):
    user = models.ForeignKey(User, related_name="cart")
    products = models.ManyToManyField(Product, related_name="CartItems")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Quantity(models.Model):
    quantity = models.IntegerField(default=0)
    product = models.ForeignKey(Product, related_name="cartqty")
    cart = models.ForeignKey(Cart, related_name="productCart")







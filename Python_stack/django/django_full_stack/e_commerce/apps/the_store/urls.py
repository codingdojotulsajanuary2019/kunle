from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^dashboard$', views.dashboard),
    url(r'^dashboard/order/(?P<id>[0-9]+)$', views.order),
    url(r'^products$', views.all_products),
    url(r'^products/add$', views.new_product),
    url(r'^products/new$', views.add_product),
    url(r'^product/(?P<id>[0-9]+)$', views.product),
    url(r'^products/edit/(?P<id>[0-9]+)$', views.edit),
    url(r'^product/cart/add/(?P<id>[0-9]+)$', views.cart),  
    url(r'^product/cancel$', views.cancel),
    url(r'^products/view/(?P<id>[0-9]+)$', views.preview),
    url(r'^products/update/(?P<id>[0-9]+)$', views.update),
    url(r'^products/delete/(?P<id>[0-9]+)$', views.delete),
    url(r'^order/ship/(?P<id>[0-9]+)$', views.ship_order),
    url(r'^order/cancel/(?P<id>[0-9]+)$', views.cancel_order),
]
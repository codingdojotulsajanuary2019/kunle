from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^new$', views.new),
    url(r'^create$', views.create),
    url(r'^(?P<number>\d+)$', views.show),
    url(r'^(?P<number>[0-9]+)/edit$', views.edit),
    url(r'^(?P<number>[0-9]+)/delete$', views.destroy)
]
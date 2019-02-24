from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.root),
    url(r'^shows$', views.index),
    url(r'^shows/new$', views.add_show),
    url(r'^shows/create$', views.create_show),
    url(r'^shows/(?P<show_id>[0-9]+)$', views.show_info),
    url(r'^shows/(?P<show_id>[0-9]+)/edit$', views.edit_show),
    url(r'^shows/(?P<show_id>[0-9]+)/update$', views.update_show),
    url(r'^shows/(?P<show_id>[0-9]+)/destroy$', views.delete_show),
]
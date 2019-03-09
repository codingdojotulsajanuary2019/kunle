from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^create$', views.new_user),
    url(r'^login$', views.user_login),
    url(r'^logout$', views.user_logout),
    url(r'^wishes$', views.all_wishes),
    url(r'^wishes/destroy/(?P<wish_id>[0-9]+)$', views.destroy_wish),
    url(r'^wishes/edit/(?P<wish_id>[0-9]+)$', views.edit_wish),
    url(r'^wishes/grant/(?P<wish_id>[0-9]+)$', views.grant_wish),
    url(r'^wishes/update/(?P<wish_id>[0-9]+)$', views.update_wish),
    url(r'^wishes/like/(?P<wish_id>[0-9]+)$', views.like_wish),
    url(r'^wishes/cancel$', views.cancel),
    url(r'^wishes/new$', views.new_wish),
    url(r'^wishes/add$', views.add_wish),
    url(r'^wishes/stats$', views.stats),
]
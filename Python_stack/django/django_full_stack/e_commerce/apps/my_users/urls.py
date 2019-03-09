from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^signin$', views.signin),
    url(r'^signup$', views.register),
    url(r'^newUser$', views.new_user),
    url(r'^login$', views.user_login),
    url(r'^admin$', views.admin_login),
    url(r'^logout$', views.user_logout),
]
from django.urls import path

from . import views

app_name = 'c3'

urlpatterns = [
    path('', views.index, name='index'),
    path('dashboard', views.dashboard, name='dashboard'),
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logout),
    path('messages/<int:uid>', views.messages_create),
    path('passwordrecovery', views.password_recovery, name='passwordrecover'),
    path('emailreset', views.send_email),
    path('passwordreset/<str:email>', views.reset_password, name='passwordreset'),
    path('submitreset/<str:email>', views.submit_password_reset),
]

from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^add_book$', views.add_book),
    url(r'^books/(?P<BookId>[0-9]+)$', views.view_book),
    url(r'^book/author/(?P<BookId>[0-9]+)$', views.add_book_author),
    url(r'^authors$', views.authors),
    url(r'^add_author$', views.add_author),
    url(r'^authors/(?P<AuthorId>[0-9]+)$', views.view_author),
    url(r'^author/book/(?P<AuthorId>[0-9]+)$', views.add_author_book),
]
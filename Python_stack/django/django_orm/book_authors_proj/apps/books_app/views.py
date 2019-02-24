from django.shortcuts import render, redirect
from .models import Book, Author

def index(request):
    context = {
        "all_books" : Book.objects.all()
    }
    return render(request, "books_app/index.html", context)

def add_book(request):
    if request.method == "POST":
        {
            "new_book" : Book.objects.create(title = request.POST["b_title"], desc= request.POST["b_desc"])
        }   
    return redirect("/")

def view_book(request, BookId):  
    content = {
        "book_to_view" : Book.objects.get(id=BookId),  
        "book_authors" : Author.objects.filter(books=BookId),
        "possible_authors" : Author.objects.exclude(books=BookId)
    }
    return render(request, "books_app/view_book.html", content)

def add_book_author(request, BookId):

    this_author=Author.objects.get(id = request.POST["author_id"])
    this_book = Book.objects.get(id=BookId)
    this_book.authors.add(this_author)
    
    return redirect(f"/books/{BookId}")

def authors(request):
    context = {
        "all_authors" : Author.objects.all()
    }
    return render(request, "books_app/authors.html", context)

def add_author(request):
    if request.method == "POST":
        {
            "new_author" : Author.objects.create(first_name = request.POST["author_fn"], last_name = request.POST ["author_ln"], notes = request.POST["author_note"])
        }   
    return redirect("/authors")

def view_author(request, AuthorId):  
    content = {
        "author_to_view" : Author.objects.get(id=AuthorId),  
        "author_books" : Book.objects.filter(authors=AuthorId),
        "possible_books" : Book.objects.exclude(authors=AuthorId)
    }
    return render(request, "books_app/view_author.html", content)

def add_author_book(request, AuthorId):

    this_book=Book.objects.get(id = request.POST["book_id"])
    this_author = Author.objects.get(id=AuthorId)
    this_author.books.add(this_book)
    
    return redirect(f"/books/{AuthorId}")
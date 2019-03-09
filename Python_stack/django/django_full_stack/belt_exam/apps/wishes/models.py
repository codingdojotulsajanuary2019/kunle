from __future__ import unicode_literals
from django.db import models
from datetime import datetime

import re

class UserManager(models.Manager):
    def reg_validator(self, postData):
        errors = {}

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

        if len(postData['email']) == 0:
            errors["email"] = "Email cannot be empty"
        else:
            if not EMAIL_REGEX.match(postData['email']):
                errors["email"] = "Invalid email address"

        if len(postData['password']) < 8:
            errors["password"] = "Password must be at least 8 characters"
        else:
            if postData['password'] != postData['pw_conf']:
                errors["pword"] = "Passwords does not match"
        
        if len(postData['f_name']) < 2:
            errors["fname"] = "Name should be at least 2 characters"

        if len(postData['l_name']) < 2:
            errors["lname"] = "Last name should be at least 2 characters"

        return errors


    def login_validator(self, postData):

        errors = {}

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

        if len(postData['user_email']) == 0:
            errors["mail"] = "Enter a valid email"
        else:
            if not EMAIL_REGEX.match(postData['user_email']):
                errors["mail"] = "Invalid email address"

        if len(postData['user_password']) < 8:
            errors["pw_word"] = "Password must be at least 8 characters"

        return errors

    def wish_validator(self, postData):
        errors = {}

        if len(postData['users_wish']) < 3:
            errors["user_wish"] = "A wish must be at least 3 characters!"

        if len(postData['desc']) < 3:
            errors["desc"] = "A description must be provided!"

        return errors



class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    objects = UserManager()

    def __repr__(self):
        return f" fn: {self.first_name}, ln: {self.last_name}, email: {self.email}, p_word: {self.password}"

class Wish(models.Model):
    item = models.CharField(max_length=255)
    description = models.TextField()
    granted_at = models.DateTimeField(null=True)
    likes = models.ManyToManyField(User, related_name="wish_liked")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, related_name="wishes")

def __repr__(self):
        return f" item: {self.item}, create_date: {self.created_at}, update_date: {self.updated_at}, wisher: {self.user}"

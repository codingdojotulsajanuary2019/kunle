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

    def address_validator(self, postData):

        errors = {}

        if not postData['add'].isalnum():
            errors['add'] = "Invalid Address"

        if not len(postData['state']) == 2:
            errors['state'] = "Enter a US state"

        if not postData['zip'].isdigit():
            errors['zip'] = "Enter a valid zipcode"

        return errors



class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    level = models.IntegerField(default=1)
    ship_address = models.CharField(max_length=255, null=True)
    ship_city = models.CharField(max_length=45, null=True)
    ship_state = models.CharField(max_length=2, null=True)
    ship_zipcode = models.CharField(max_length=5, null=True)
    bill_address = models.CharField(max_length=255, null=True)
    bill_city = models.CharField(max_length=45, null=True)
    bill_state = models.CharField(max_length=2, null=True)
    bill_zipcode = models.CharField(max_length=5, null=True)  
    objects = UserManager()

    def __repr__(self):
        return f" fn: {self.first_name}, ln: {self.last_name}, email: {self.email}, p_word: {self.password}"

from __future__ import unicode_literals
from django.db import models

import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
    def check_pwd_confirm(self, postData, errors):
        if len(postData.get('password', '')) < 1:
            errors["password"] = "Password cannot be empty"
        elif len(postData.get('password', '')) < 6:
            errors["password"] = "Password must be more than 6 characters"

        if postData.get('password', '') != postData.get('password_confirmation', ''):
            errors["pwd_confirm"] = "Passwords don't match! Please enter again"

    def check_name(self, postData, errors):
        if len(postData.get('name', '')) < 1:
            errors["name"] = "First Name cannot be empty"
        elif len(postData.get('name', '')) < 2:
            errors["name"] = "First Name should be atleast 2 characters"
        elif not postData.get('name', '').isalpha():
            errors["name"] = "First Name should contain only letters"

    def check_email(self, postData, errors):
        if len(postData.get('email', '')) < 1:
            errors["email"] = "Email cannot be empty"
        elif not EMAIL_REGEX.match(postData.get('email', '')):
            errors["email"] = "Not a Valid Email"

    def basic_validator(self, postData):
        errors = {}

        self.check_name(postData, errors)
        self.check_email(postData, errors)
        self.check_pwd_confirm(postData, errors)

        return errors

class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True, blank=False)
    password = models.BinaryField(max_length=255, blank=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    def __str__(self):
        return 'id={}, name={}, email={}, password={}'. \
            format(self.id, self.name, self.email, self.password)

class MessageManager(models.Manager):
    def create_validator(self, postData):
        errors = {}

        if len(postData['subject']) < 1:
            errors['subject'] = 'Please enter a subject.'

        if len(postData['content']) < 1:
            errors['content'] = 'Please enter some content.'

        return errors

class Message(models.Model):
    subject = models.CharField(max_length=255)
    content = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    poster = models.ForeignKey('User', on_delete=models.SET_NULL, null=True)

    objects = MessageManager()

    def __str__(self):
        return 'id={}, subject={}, content={}, poster={}'. \
            format(self.id, self.subject, self.content, self.poster.name)

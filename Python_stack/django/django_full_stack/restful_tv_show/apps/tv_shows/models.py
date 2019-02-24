from __future__ import unicode_literals
from django.db import models
from datetime import datetime

class ShowManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}

        if len(postData['showtitle']) < 3:
            errors["title"] = "Title should be atleast 3 characters"
        if len(postData['shownetwork']) < 3:
            errors["network"] = "Network should be atleast 3 characters"

        if len(postData['desc']) > 0 and  len(postData['desc']) < 10:
            errors["desc"] = "Give a description. Atleast 10 characters"

        if len(postData['rel_date']) == 0:
            errors["date"] = "Please enter a date"
        else:
            input_date = datetime.strptime(postData['rel_date'], "%Y-%m-%d")
            today = datetime.today() 
            if input_date > today:
                errors["date"] = "Date cannot be in the future"
        return errors

class Show(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    description = models.TextField()
    release_date = models.DateField()
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()

    def __repr__(self):
        return f" id: {self.id}, title: {self.title}, network: {self.network}, desc: {self.description}, released: {self.release_date}, updated: {self.updated_at}"

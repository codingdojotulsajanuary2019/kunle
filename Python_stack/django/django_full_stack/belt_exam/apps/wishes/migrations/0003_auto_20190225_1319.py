# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2019-02-25 19:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wishes', '0002_auto_20190225_1038'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='wish',
            name='likes',
        ),
        migrations.AddField(
            model_name='wish',
            name='likes',
            field=models.ManyToManyField(related_name='wish_liked', to='wishes.User'),
        ),
    ]

# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2019-02-25 19:47
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('wishes', '0004_wish_count'),
    ]

    operations = [
        migrations.RenameField(
            model_name='wish',
            old_name='item',
            new_name='wish',
        ),
    ]

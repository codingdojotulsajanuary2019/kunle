# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2019-03-01 17:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('the_store', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='quantity',
            field=models.IntegerField(default=0),
        ),
    ]

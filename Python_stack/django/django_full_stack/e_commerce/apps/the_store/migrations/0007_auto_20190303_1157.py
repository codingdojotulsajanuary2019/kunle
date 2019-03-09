# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2019-03-03 17:57
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('the_store', '0006_cart'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cart',
            name='products',
        ),
        migrations.RemoveField(
            model_name='cart',
            name='quantity',
        ),
        migrations.RemoveField(
            model_name='cart',
            name='user',
        ),
        migrations.RemoveField(
            model_name='order',
            name='order_by',
        ),
        migrations.RemoveField(
            model_name='order',
            name='ordered_product',
        ),
        migrations.RemoveField(
            model_name='order',
            name='quantity',
        ),
        migrations.RemoveField(
            model_name='product',
            name='Categories',
        ),
        migrations.DeleteModel(
            name='Cart',
        ),
        migrations.DeleteModel(
            name='Category',
        ),
        migrations.DeleteModel(
            name='Order',
        ),
        migrations.DeleteModel(
            name='Product',
        ),
    ]

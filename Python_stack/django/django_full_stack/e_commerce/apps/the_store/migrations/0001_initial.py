# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2019-02-28 23:13
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('my_users', '0002_auto_20190228_1713'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=45)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_price', models.DecimalField(decimal_places=2, max_digits=8)),
                ('status', models.CharField(max_length=45)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('order_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orders', to='my_users.User')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=45)),
                ('description', models.CharField(max_length=225)),
                ('price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('Categories', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='the_store.Category')),
            ],
        ),
        migrations.AddField(
            model_name='order',
            name='ordered_product',
            field=models.ManyToManyField(related_name='product_order', to='the_store.Product'),
        ),
        migrations.AddField(
            model_name='order',
            name='quantity',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product_qty', to='the_store.Product'),
        ),
    ]
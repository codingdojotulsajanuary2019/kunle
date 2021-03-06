# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2019-03-03 18:00
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('the_users', '0001_initial'),
        ('the_store', '0007_auto_20190303_1157'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_price', models.DecimalField(decimal_places=2, max_digits=8)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
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
                ('order_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orders', to='the_users.User')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=45)),
                ('description', models.CharField(max_length=225)),
                ('price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('quantity', models.IntegerField(default=0)),
                ('qty_sold', models.IntegerField(default=0)),
                ('qty_on_hand', models.IntegerField()),
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
        migrations.AddField(
            model_name='cart',
            name='products',
            field=models.ManyToManyField(related_name='CartItems', to='the_store.Product'),
        ),
        migrations.AddField(
            model_name='cart',
            name='quantity',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ProductQty', to='the_store.Product'),
        ),
        migrations.AddField(
            model_name='cart',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cart', to='the_users.User'),
        ),
    ]

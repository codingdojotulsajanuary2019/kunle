# Generated by Django 2.0.6 on 2019-01-29 18:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('challenge1', '0004_auto_20190117_0212'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=255),
        ),
    ]

# Generated by Django 2.0.6 on 2019-01-17 02:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('challenge1', '0003_remove_user_last_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='first_name',
            new_name='name',
        ),
    ]

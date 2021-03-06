# Generated by Django 2.0.6 on 2019-01-17 15:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('challenge3', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject', models.CharField(max_length=255)),
                ('content', models.TextField()),
                ('poster', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='challenge3.User')),
            ],
        ),
    ]

# Generated by Django 5.0.4 on 2024-04-19 08:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_user_location'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='location',
        ),
    ]

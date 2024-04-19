# Generated by Django 5.0.4 on 2024-04-19 10:01

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_remove_book_location'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='book_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='users.book'),
            preserve_default=False,
        ),
    ]
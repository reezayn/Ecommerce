# Generated by Django 5.0.4 on 2024-04-19 10:07

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_transaction_book_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='seller',
            field=models.ForeignKey(db_column='seller_id', on_delete=django.db.models.deletion.CASCADE, related_name='books', to=settings.AUTH_USER_MODEL),
        ),
    ]
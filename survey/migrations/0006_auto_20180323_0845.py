# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-23 08:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('survey', '0005_auto_20180323_0803'),
    ]

    operations = [
        migrations.AlterField(
            model_name='survey',
            name='expiration_time',
            field=models.IntegerField(default=604800),
        ),
    ]

# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-23 09:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('survey', '0007_auto_20180323_0927'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='segment',
            field=models.IntegerField(),
        ),
    ]

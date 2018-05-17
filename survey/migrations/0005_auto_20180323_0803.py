# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-03-23 08:03
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('survey', '0004_auto_20180323_0513'),
    ]

    operations = [
        migrations.AddField(
            model_name='questiontemplate',
            name='segment',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterUniqueTogether(
            name='question',
            unique_together=set([]),
        ),
        migrations.RemoveField(
            model_name='question',
            name='segment',
        ),
    ]
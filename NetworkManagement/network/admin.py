from django.contrib import admin

# Register your models here.

from .models import NetworkGeneration, SiteGSM

admin.site.register(NetworkGeneration)
admin.site.register(SiteGSM)
from django.contrib import admin

# Register your models here.

from .models import Project, Contractor, Equipment

admin.site.register(Project)
admin.site.register(Contractor)
admin.site.register(Equipment)

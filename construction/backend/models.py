from django.db import models

# Create your models here.


"""
DB. Refer with project "Student" from "DLS-Service".

"""

from django.db import models

# Create your models here.


class Project(models.Model):
    # Subject_Properties:
    project_name = models.CharField(max_length=100, verbose_name='Project')

    def __str__(self) -> str:
        return f'{self.project_name}'


class Contractor(models.Model):
    # Author_Properties:
    contractor_name = models.CharField(max_length=100, verbose_name='Contractor')

    def __str__(self) -> str:
        return f'{self.contractor_name}'


class Storage(models.Model):
    storage_name = models.CharField(max_length=150, verbose_name='File:')

    def __str__(self) -> str:
        return f'{self.storage_name}'


class Equipment(models.Model):
    # Subject_Properties
    equipment_name = models.CharField(max_length=100, verbose_name='Equipment name')
    equipment_contractor = models.ForeignKey(Contractor, verbose_name='Equipment contractor', on_delete=models.CASCADE)
    # "CASCADE" - saves DB (no incorrect data mismatch)
    equipment_project = models.ForeignKey(Project, verbose_name='Project', on_delete=models.CASCADE) #CASCADE - to delete all data.
    equipment_time = models.IntegerField(verbose_name='Working time')
    equipment_price = models.FloatField(verbose_name='Price')
    equipment_start = models.DateField(verbose_name='Date of start using')

    def __str__(self) -> str:
        return f'{self.equipment_name}'

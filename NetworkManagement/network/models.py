from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class NetworkGeneration(models.Model):
    GENERATION_CHOICES = [
        ('2G', '2G'),
        ('3G', '3G'),
        ('4G', '4G'),
    ]

    generation = models.CharField(max_length=2, choices=GENERATION_CHOICES)
    nom = models.CharField(max_length=100)
    lac = models.IntegerField()
    bsc = models.IntegerField()
    num_trx = models.IntegerField()
    frequency_band = models.CharField(max_length=50)
    azimuth = models.IntegerField()
    receptions = models.IntegerField()
    antennes = models.IntegerField()
    state = models.CharField(max_length=30)
    name = models.CharField(max_length=255)
    description = models.TextField(default='Default description')

    def __str__(self):
        return f"{self.generation} - NOM: {self.nom}"


class SiteGSM(models.Model):
    site_id = models.IntegerField()
    site_adresse = models.CharField(max_length=300)
    visite_date = models.DateField()
    site_name = models.CharField(max_length=100)
    latitude = models.FloatField()
    longitude = models.FloatField()
    height = models.FloatField()
    network_generation = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.site_name


class CustomUser(AbstractUser):
    access_key = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.username

from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    # Añade más campos según sea necesario

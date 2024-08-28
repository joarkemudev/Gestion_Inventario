from django.db import models
from djongo import models as djongo_models

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

class InventoryItem(djongo_models.Model):
    product = djongo_models.ForeignKey(Product, on_delete=djongo_models.CASCADE)
    quantity = djongo_models.IntegerField()
    delivered = djongo_models.BooleanField(default=False)

    def __str__(self):
        return f"{self.product.name} - {self.quantity}"


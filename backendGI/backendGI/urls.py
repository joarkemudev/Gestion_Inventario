from django.urls import path
from . import views

urlpatterns = [
    path('apiGI/products/', views.products, name='products'),
    path('apiGI/inventory/', views.inventory, name='inventory'),
    path('apiGI/inventory/<str:id>/', views.inventory_item, name='inventory_item'),
]


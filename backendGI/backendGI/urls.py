from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apiGI.views import ProductoViewSet, inventario_list, entregar_inventario

router = DefaultRouter()
router.register(r'productos', ProductoViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('apiGI/', include(router.urls)),
    path('apiGI/inventario/', inventario_list),
    path('apiGI/inventario/<str:id>/entregar/', entregar_inventario),
]

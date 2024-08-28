from rest_framework import viewsets
from .models import Producto
from .serializers import ProductoSerializer
from pymongo import MongoClient
from rest_framework.decorators import api_view
from rest_framework.response import Response

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

# Configurar la conexión a MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['igc']
inventario_collection = db['inventario']

@api_view(['GET', 'POST'])
def inventario_list(request):
    if request.method == 'GET':
        inventario = list(inventario_collection.find())
        return Response(inventario)
    elif request.method == 'POST':
        nuevo_inventario = request.data
        result = inventario_collection.insert_one(nuevo_inventario)
        return Response({'id': str(result.inserted_id)}, status=201)

@api_view(['PUT'])
def entregar_inventario(request, id):
    result = inventario_collection.update_one({'_id': id}, {'$set': {'entregado': True}})
    if result.modified_count:
        return Response({'status': 'success'})
    return Response({'status': 'not found'}, status=404)

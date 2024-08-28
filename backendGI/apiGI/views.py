from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Product, InventoryItem
import json
from bson import ObjectId

@csrf_exempt
def products(request):
    if request.method == 'GET':
        products = Product.objects.all().values('id', 'name')
        return JsonResponse(list(products), safe=False)

@csrf_exempt
def inventory(request):
    if request.method == 'GET':
        inventory = InventoryItem.objects.all().values()
        return JsonResponse(list(inventory), safe=False)
    
    elif request.method == 'POST':
        data = json.loads(request.body)
        product = Product.objects.get(id=data['product'])
        item = InventoryItem.objects.create(
            product=product,
            quantity=data['quantity'],
            delivered=data['delivered']
        )
        return JsonResponse({'id': str(item.id)}, status=201)

@csrf_exempt
def inventory_item(request, id):
    if request.method == 'PUT':
        data = json.loads(request.body)
        item = InventoryItem.objects.get(id=ObjectId(id))
        item.delivered = data['delivered']
        item.save()
        return JsonResponse({'status': 'success'})

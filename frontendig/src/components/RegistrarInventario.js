import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { toast } from 'react-hot-toast'

export default function RegisterInventory() {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState('')
  const [quantity, setQuantity] = useState('')

  useEffect(() => {
    axios.get('/apiGI/products')
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
        toast.error('Error al cargar los productos')
      })
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedProduct || !quantity) {
      toast.error('Por favor, complete todos los campos')
      return
    }
    axios.post('/apiGi/inventory', {
      product: selectedProduct,
      quantity: parseInt(quantity),
      delivered: false
    })
    .then(() => {
      toast.success('Inventario guardado exitosamente')
      setSelectedProduct('')
      setQuantity('')
    })
    .catch((error) => {
      console.error('Error saving inventory:', error)
      toast.error('Error al guardar el inventario')
    })
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Registrar Inventario</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="product">Producto</Label>
            <Select 
              id="product"
              value={selectedProduct} 
              onValueChange={setSelectedProduct}
              className="w-full"
            >
              <option value="">Seleccionar Producto</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>{product.name}</option>
              ))}
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Cantidad</Label>
            <Input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Ingrese la cantidad"
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full">Guardar y Enviar</Button>
        </form>
      </CardContent>
    </Card>
  )
}
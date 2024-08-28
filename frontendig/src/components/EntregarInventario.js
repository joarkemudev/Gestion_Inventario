import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'react-hot-toast'

interface InventoryItem {
  id: string
  product: string
  quantity: number
  delivered: boolean
}

export default function DeliverInventory() {
  const [inventory, setInventory] = useState<InventoryItem[]>([])

  useEffect(() => {
    fetchInventory()
  }, [])

  const fetchInventory = () => {
    axios.get('/apiIG/inventory')
      .then((response) => {
        setInventory(response.data)
      })
      .catch((error) => {
        console.error('Error fetching inventory:', error)
        toast.error('Error al cargar el inventario')
      })
  }

  const handleDeliver = (id: string) => {
    axios.put(`/apiIG/inventory/${id}`, { delivered: true })
      .then(() => {
        fetchInventory()
        toast.success('Producto entregado exitosamente')
      })
      .catch((error) => {
        console.error('Error delivering item:', error)
        toast.error('Error al entregar el producto')
      })
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Entregar Inventario</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Producto</TableHead>
              <TableHead>Cantidad</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Acción</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.product}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.delivered ? 'Entregado' : 'Pendiente'}</TableCell>
                <TableCell>
                  {!item.delivered ? (
                    <Button onClick={() => handleDeliver(item.id)}>Entregar</Button>
                  ) : (
                    <span className="text-gray-500">Entregado</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
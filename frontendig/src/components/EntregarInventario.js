import React, { useState, useEffect } from 'react';
import { Button, Input, Select, Table } from '@/components/ui';

// Componente para entregar inventario
export function EntregarInventario() {
    const [inventario, setInventario] = useState([]);
  
    useEffect(() => {
      // Aquí deberías hacer una llamada a tu API para obtener el inventario de MongoDB
      fetchInventario();
    }, []);
  
    const fetchInventario = async () => {
      // Implementa la lógica para obtener el inventario de tu API
    };
  
    const handleEntregar = async (id) => {
      // Implementa la lógica para actualizar el estado a "Entregado" en tu API
    };
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Entregar Inventario</h1>
        <Table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Ubicación</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {inventario.map((item) => (
              <tr key={item.id}>
                <td>{item.producto}</td>
                <td>{item.cantidad}</td>
                <td>{item.ubicacion}</td>
                <td>
                  {item.entregado ? (
                    <span>Entregado</span>
                  ) : (
                    <Button onClick={() => handleEntregar(item.id)} disabled={item.entregado}>
                      Entregar
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
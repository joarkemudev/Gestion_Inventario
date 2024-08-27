import React, { useState, useEffect } from 'react';
import { Button, Input, Select, Table } from '@/components/ui';

// Componente para registrar inventario
export function RegistrarInventario() {
  const [productos, setProductos] = useState([]);
  const [inventario, setInventario] = useState({
    producto: '',
    cantidad: 0,
    ubicacion: '',
  });

  useEffect(() => {
    // Aquí deberías hacer una llamada a tu API para obtener la lista de productos de MySQL
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    // Implementa la lógica para obtener productos de tu API
  };

  const handleInputChange = (e) => {
    setInventario({ ...inventario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Implementa la lógica para enviar el inventario a MongoDB a través de tu API
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Registrar Inventario</h1>
      <div className="space-y-4">
        <Select
          name="producto"
          value={inventario.producto}
          onChange={handleInputChange}
          options={productos.map(p => ({ value: p.id, label: p.nombre }))}
        />
        <Input
          type="number"
          name="cantidad"
          value={inventario.cantidad}
          onChange={handleInputChange}
          placeholder="Cantidad"
        />
        <Input
          name="ubicacion"
          value={inventario.ubicacion}
          onChange={handleInputChange}
          placeholder="Ubicación"
        />
        <Button onClick={handleSubmit}>Guardar y enviar</Button>
      </div>
    </div>
  );
}
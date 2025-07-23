import React, { useEffect, useState,useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { getClientes } from '../../../api/clientes';
import ClientesList from '../../../components/ClientesList';
import { useRouter,useFocusEffect } from 'expo-router';



export default function ClientesScreen() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const cargarClientes=useCallback(() => {
    setLoading(true);
    getClientes()
      .then(clientes => {
        const ordenados = clientes.sort((a, b) => {
          const nombreA = (a.nombre + ' ' + a.apellido).toLowerCase();
          const nombreB = (b.nombre + ' ' + b.apellido).toLowerCase();
          return nombreA.localeCompare(nombreB);
        });
        setClientes(ordenados);
      })
      .catch(error => {
        console.error('Error al obtener los clientes', error);
      })
      .finally(() => setLoading(false));
  }, []);

//Provoca que cada vez que se enfoque la pantalla, se recarguen los clientes  

  useFocusEffect(
    useCallback(() => {
      cargarClientes();
    }, [cargarClientes])
  );

  const handleEdit = (clienteId) => {
    router.push(`/clientes/${clienteId}`);
  };

  if (loading) return <ActivityIndicator />;
  return (
    <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      <ClientesList clientes={clientes} onEdit={handleEdit} />
    </View>
  );
}
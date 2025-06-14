//Pantalla principal de clientes
import React, { useEffect, useState } from 'react';
import { View,   ActivityIndicator } from 'react-native';
import { getClientes } from '../api/clientes';
import ClientList from '../components/ClientList';
import { useNavigation } from '@react-navigation/native';

export default function ClientesScreen() {
    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
      const navigation = useNavigation();

    useEffect(() =>{
         getClientes()
        .then(clientes => {
            // Ordena alfabéticamente por nombre y luego por apellido
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

const handleEdit = (clienteId) => {
    navigation.navigate('EditarCliente', { clienteId });
  };

    if (loading) return <ActivityIndicator/>;
    return (
        <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>           
            <ClientList clientes={clientes} onEdit={handleEdit} />
        </View>
    );
}
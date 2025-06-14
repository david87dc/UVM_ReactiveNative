import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, ActivityIndicator, Text } from 'react-native';
import { getClienteById } from '../api/clientes';

export default function EditarClienteScreen({ route, navigation }) {
  const { clienteId } = route.params;
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getClienteById(clienteId)
      .then(setCliente)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [clienteId]);

  if (loading) return <ActivityIndicator />;
  if (!cliente) return <Text>Error cargando cliente</Text>;

  return (
    <View style={{ padding: 16 }}>
      <Text>Nombre:</Text>
      <TextInput value={cliente.nombre} style={{ borderWidth: 1, marginBottom: 8 }} />
      <Text>Apellido:</Text>
      <TextInput value={cliente.apellido} style={{ borderWidth: 1, marginBottom: 8 }} />
      {/* Agrega más campos según tu modelo */}
      <Button title="Guardar" onPress={() => {/* lógica de guardado */}} />
    </View>
  );
}
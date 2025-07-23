import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getClienteById, updateCliente } from '../../../api/clientes';
import ClienteForm from '../../../components/ClienteForm';


export default function EditarClienteScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getClienteById(id)
      .then(setCliente)
      .catch(() => Alert.alert('Error', 'No se pudo cargar el cliente'))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSave = async (data) => {
    setSaving(true);
    try {
      await updateCliente(id, data);
      Alert.alert('Éxito', 'Cliente actualizado');
      router.back();
    } catch (e) {
      Alert.alert('Error', 'No se pudo actualizar el cliente');
    } finally {
      setSaving(false);
    }
  };

  if (loading || !cliente) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    <ClienteForm
      initialCliente={cliente}
      onSave={handleSave}
      onCancel={() => router.back()}
      loading={saving}
    />
  );
}
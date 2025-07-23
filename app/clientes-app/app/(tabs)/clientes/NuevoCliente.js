import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { createCliente, getClienteById, updateCliente } from '../../../api/clientes';
import ClienteForm from '../../../components/ClienteForm';


const emptyCliente = {
  nombre: '',
  apellido: '',
  fecha_nacimiento: '',
  correo: '',
  is_deleted: false,
};

export default function NuevoCliente() {
  const router = useRouter();
  const [clienteCreate] = useState(emptyCliente);
  const [saving, setSaving] = useState(false);

  const handleSave = async (data) => {
    setSaving(true);
    try {
      await createCliente(data);
      Alert.alert('Éxito', 'Cliente creado correctamente');
      router.back();
    } catch (e) {
      Alert.alert('Error', 'No se pudo guardar el cliente');
    } finally {
      setSaving(false);
    }
  };



  return (
    <ClienteForm
      initialCliente={clienteCreate}
      onSave={handleSave}
      onCancel={() => router.back()}
      loading={saving}
    />
  );
}
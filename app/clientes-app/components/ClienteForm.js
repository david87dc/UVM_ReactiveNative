import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch } from 'react-native';
import styles from '../styles/ClientForm.styles'; 


export default function ClienteForm({ initialCliente, onSave, onCancel, loading }) {
  const [cliente, setCliente] = useState(initialCliente);

 

  // Este useEffect asegura que el formulario se actualice cuando cambie el cliente a editar
  useEffect(() => {
    setCliente(initialCliente);
  }, [initialCliente]);

  // Maneja los cambios en los campos del formulario
 const handleChange = (field, value) => {
    setCliente({ ...cliente, [field]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        value={cliente.nombre}
        onChangeText={text => handleChange('nombre', text)}
      />

      <Text style={styles.label}>Apellido</Text>
      <TextInput
        style={styles.input}
        value={cliente.apellido}
        onChangeText={text => handleChange('apellido', text)}
      />

      <Text style={styles.label}>Fecha de nacimiento</Text>
      <TextInput
        style={styles.input}
        value={cliente.fecha_nacimiento}
        onChangeText={text => handleChange('fecha_nacimiento', text)}
        placeholder="YYYY-MM-DD"
      />

      <Text style={styles.label}>Correo</Text>
      <TextInput
        style={styles.input}
        value={cliente.correo}
        onChangeText={text => handleChange('correo', text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

     

      <View style={styles.buttonRow}>
        <Button title="Guardar" onPress={() => onSave(cliente)} disabled={loading} />
        <Button title="Regresar" onPress={onCancel} color="#888" />
      </View>
    </View>
  );
}
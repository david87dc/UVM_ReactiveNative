//Componentes del listado de clientes

import React from 'react';
import { View, Text, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles/ClientList.styles';
const ClienteItem = ({ cliente, onEdit}) => (
   <View style={styles.card}>
    <View style={styles.headerRow}>
      <Text style={styles.nombre}>{cliente.nombre} {cliente.apellido}</Text>
      <TouchableOpacity onPress={() => onEdit(cliente.id)}>
        <Icon name="pencil" size={24} color="green" />
      </TouchableOpacity>
    </View>
    <View style={styles.infoRow}>
      <Icon name="calendar" size={20} color="#888" />
      <Text style={styles.infoText}>
        {new Date(cliente.fecha_nacimiento).toLocaleDateString()}
      </Text>
    </View>
    <View style={styles.infoRow}>
      <Icon name="email" size={20} color="#888" />
      <Text style={styles.infoText}>{cliente.correo}</Text>
    </View>
  </View>
);

export default function ClientesList({ clientes,onEdit }) {
  return (
    <FlatList
      data={clientes}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <ClienteItem cliente={item} onEdit={onEdit} />
      )}
      contentContainerStyle={styles.list}
    />
  );
}

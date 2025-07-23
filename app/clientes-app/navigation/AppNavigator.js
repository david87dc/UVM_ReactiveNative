import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClientesScreen from '../app/screens/ClientesScreen';
import EditarClienteScreen from '../app/screens/EditarClienteScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Clientes" component={ClientesScreen} />
        <Stack.Screen name="EditarCliente" component={EditarClienteScreen}
          options={{ title: 'Editar Cliente', presentation: 'modal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
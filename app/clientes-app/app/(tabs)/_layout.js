import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
     
      <Tabs.Screen
        name="clientes/ClientesScreen"
        options={{
          title: 'Clientes',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="address-book-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="clientes/[id]"
        options={{
          href: null,
        }}
      />
  <Tabs.Screen
        name="clientes/NuevoCliente"
        options={{
          title: 'Agregar',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus-square-o" color={color} />,
        }}
      />
    </Tabs>
    
  );
}
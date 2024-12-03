import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Bienvenida from './src/pantallas/Bienvenida';
import Menu from './src/pantallas/Menu';
import Momentos from './src/pantallas/Momentos';
import Crecimiento from './src/pantallas/Crecimiento';
import Salud from './src/pantallas/Salud';
import Diario from './src/pantallas/Diario';
import Lactancia from './src/pantallas/Lactancia';

const Stack = createStackNavigator();

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenida">
        <Stack.Screen name="Bienvenida" component={Bienvenida} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Momentos" component={Momentos} />
        <Stack.Screen name="Crecimiento" component={Crecimiento} />
        <Stack.Screen name="Salud" component={Salud} />
        <Stack.Screen name="Diario" component={Diario} />
        <Stack.Screen name="Lactancia" component={Lactancia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 

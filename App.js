import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PrimeraPantalla from './Frontend/pantallas/PrimeraPantalla';
import SegundaPantalla from './Frontend/pantallas/SegundaPantalla';
import Momentos from './Frontend/pantallas/Momentos';
import Crecimiento from './Frontend/pantallas/Crecimiento';
import Salud from './Frontend/pantallas/Salud';
import Diario from './Frontend/pantallas/Diario';
import Lactancia from './Frontend/pantallas/Lactancia';
import WhatsApp from './Frontend/pantallas/WhatsApp';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PrimeraPantalla">
        <Stack.Screen name="PrimeraPantalla" component={PrimeraPantalla} />
        <Stack.Screen name="SegundaPantalla" component={SegundaPantalla} />
        <Stack.Screen name="Momentos" component={Momentos} />
        <Stack.Screen name="Crecimiento" component={Crecimiento} />
        <Stack.Screen name="Salud" component={Salud} />
        <Stack.Screen name="Diario" component={Diario} />
        <Stack.Screen name="Lactancia" component={Lactancia} />
        <Stack.Screen name="WhatsApp" component={WhatsApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../estilos/globales';

export default function Diario() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Tu Diario de Actividad</Text>
    </View>
  );
}

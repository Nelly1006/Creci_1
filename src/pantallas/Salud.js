import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../estilos/globales';

export default function Salud() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Información de Salud</Text>
    </View>
  );
}

import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../estilos/globales';

export default function Momentos() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Momentos Especiales</Text>
    </View>
  );
}

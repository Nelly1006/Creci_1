import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BotonMenu from '../components/BotonMenu';  // Importando el componente BotonMenu
import { useNavigation } from '@react-navigation/native'; // Para la navegación
import globalStyles from '../styles/globales'; // Importando los estilos globales

export default function SegundaPantalla() {
  const navigation = useNavigation(); // Hook para navegar a otras pantallas

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>¡Bienvenida a Creci!</Text>

      {/* Botones para navegar a otras pantallas */}
      <BotonMenu title="Momentos" onPress={() => navigation.navigate('Momentos')} />
      <BotonMenu title="Salud" onPress={() => navigation.navigate('Salud')} />
      <BotonMenu title="Crecimiento" onPress={() => navigation.navigate('Crecimiento')} />
      <BotonMenu title="Diario" onPress={() => navigation.navigate('Diario')} />
      <BotonMenu title="Lactancia" onPress={() => navigation.navigate('Lactancia')} />
      <BotonMenu title="WhatsApp" onPress={() => navigation.navigate('WhatsApp')} />
    </View>
  );
}

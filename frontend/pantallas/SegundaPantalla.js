import React from 'react';
import { View } from 'react-native';
import BotonMenu from '../components/BotonMenu';  // Importar el componente BotonMenu
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../../Frontend/styles/globales';

export default function SegundaPantalla() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>¡Bienvenida a Creci!</Text>
      <BotonMenu title="Momentos" onPress={() => navigation.navigate('Momentos')} />
      <BotonMenu title="Salud" onPress={() => navigation.navigate('Salud')} />
      <BotonMenu title="Crecimiento" onPress={() => navigation.navigate('Crecimiento')} />
      <BotonMenu title="Diario" onPress={() => navigation.navigate('Diario')} />
      <BotonMenu title="Lactancia" onPress={() => navigation.navigate('Lactancia')} />
      <BotonMenu title="WhatsApp" onPress={() => navigation.navigate('WhatsApp')} />
    </View>
  );
}

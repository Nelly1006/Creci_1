import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../estilos/globales';

export default function Bienvenida() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Image source={require('../assets/logo.png')} style={{ width: 200, height: 200 }} />
      <Text style={globalStyles.text}>Bienvenida Mamá</Text>
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Menu')}>
        <Text style={globalStyles.buttonText}>→</Text>
      </TouchableOpacity>
    </View>
  );
}

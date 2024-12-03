import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importamos el hook para la navegación
import * as Animatable from 'react-native-animatable'; // Para animar la imagen
import globalStyles from '../styles/globales'; // Importando los estilos globales

export default function PrimeraPantalla() {
  const navigation = useNavigation(); // Hook de navegación

  return (
    <View style={globalStyles.container}>
      <Animatable.Image
        animation="fadeIn"
        duration={1500}
        source={require('../../assets/logocrecci.png')} // Ruta del logo
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Bienvenida Mamá</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SegundaPantalla')}>
        <Text style={styles.buttonText}>→</Text> {/* Botón de navegación */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    color: '#FF6B81',
    fontFamily: 'Comic Sans MS',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: '#FF89C6',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
});

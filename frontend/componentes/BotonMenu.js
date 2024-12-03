import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotonMenu = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 20,
    backgroundColor: '#FF89C6', // Botón color pastel
    borderRadius: 30,           // Bordes redondeados
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Comic Sans MS', // Fuente tierna
  },
});

export default BotonMenu;

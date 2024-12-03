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
    padding: 15,
    backgroundColor: '#FF89C6',
    borderRadius: 10,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default BotonMenu;

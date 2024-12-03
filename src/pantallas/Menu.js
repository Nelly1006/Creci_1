import React from 'react';
import { View, Button, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Momentos')} style={styles.button}>
        <Text style={styles.buttonText}>Momentos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Salud')} style={styles.button}>
        <Text style={styles.buttonText}>Salud</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Crecimiento')} style={styles.button}>
        <Text style={styles.buttonText}>Crecimiento</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Diario')} style={styles.button}>
        <Text style={styles.buttonText}>Diario</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Lactancia')} style={styles.button}>
        <Text style={styles.buttonText}>Lactancia</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F0C0D8' },
  button: { margin: 10, padding: 15, backgroundColor: '#FF89C6', borderRadius: 10, width: 250 },
  buttonText: { fontSize: 20, color: '#fff', textAlign: 'center' },
};

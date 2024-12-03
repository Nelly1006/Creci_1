import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Bienvenida() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logocreci.png')} style={styles.logo} />
      <Text style={styles.text}>Bienvenida Mamá</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.buttonText}>→</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F0C0D8' },
  logo: { width: 200, height: 200 },
  text: { fontSize: 24, color: '#ffffff', marginVertical: 20 },
  button: { padding: 10, backgroundColor: '#FF89C6', borderRadius: 50 },
  buttonText: { fontSize: 24, color: '#fff' },
};

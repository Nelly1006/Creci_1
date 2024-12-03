
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginButton}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#F0C0D8',
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginButton: {
    fontSize: 18,
    color: '#FF89C6',
  },
});

export default Header;

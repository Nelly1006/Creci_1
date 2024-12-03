import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import globalStyles from '../styles/globales'; // Importando los estilos globales

export default function Crecimiento() {
  const [peso, setPeso] = useState('');
  const [estatura, setEstatura] = useState('');
  const [registro, setRegistro] = useState([]);

  const agregarRegistro = () => {
    if (peso && estatura) {
      const nuevoRegistro = { peso, estatura, fecha: new Date().toLocaleString() };
      setRegistro([...registro, nuevoRegistro]);
      setPeso('');
      setEstatura('');
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Registro de Crecimiento del Bebé</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Estatura (cm)"
        keyboardType="numeric"
        value={estatura}
        onChangeText={setEstatura}
      />
      <Button title="Agregar Registro" onPress={agregarRegistro} />

      <ScrollView style={styles.table}>
        {registro.length > 0 ? (
          registro.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{item.peso} kg</Text>
              <Text style={styles.cell}>{item.estatura} cm</Text>
              <Text style={styles.cell}>{item.fecha}</Text>
            </View>
          ))
        ) : (
          <Text>No hay registros aún</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    marginTop: 20,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    fontSize: 16,
  },
});

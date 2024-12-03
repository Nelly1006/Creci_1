import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import globalStyles from '../styles/globales'; // Importando los estilos globales

export default function Diario() {
  const [nota, setNota] = useState('');
  const [registro, setRegistro] = useState([]);

  const agregarNota = () => {
    if (nota) {
      const nuevaNota = { nota, fecha: new Date().toLocaleString() };
      setRegistro([...registro, nuevaNota]);
      setNota('');
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Tu Diario de Actividad</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Escribe tu nota"
        value={nota}
        onChangeText={setNota}
      />
      <Button title="Agregar Nota" onPress={agregarNota} />

      <ScrollView style={styles.scrollView}>
        {registro.length > 0 ? (
          registro.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.note}>{item.nota}</Text>
              <Text style={styles.date}>{item.fecha}</Text>
            </View>
          ))
        ) : (
          <Text>No hay notas aún</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 20,
    width: '100%',
  },
  row: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  note: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
    color: '#aaa',
  },
});

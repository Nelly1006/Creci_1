import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import globalStyles from '../styles/globales'; // Importando los estilos globales

export default function Lactancia() {
  const [tiempo, setTiempo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [registro, setRegistro] = useState([]);

  let interval = null;

  const iniciarCronometro = () => {
    setIsRunning(true);
    interval = setInterval(() => {
      setTiempo((prevTime) => prevTime + 1);
    }, 1000);
  };

  const detenerCronometro = () => {
    clearInterval(interval);
    setIsRunning(false);
    const fecha = new Date().toLocaleString();
    setRegistro([...registro, { tiempo, fecha }]);
    setTiempo(0); // Resetear tiempo
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Cronómetro de Lactancia</Text>

      <Text style={styles.time}>{tiempo}s</Text>

      <Button title={isRunning ? "Detener" : "Iniciar"} onPress={isRunning ? detenerCronometro : iniciarCronometro} />

      <Text style={styles.historyTitle}>Historial de Lactancia:</Text>
      {registro.length > 0 ? (
        registro.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text>{item.tiempo}s</Text>
            <Text>{item.fecha}</Text>
          </View>
        ))
      ) : (
        <Text>No hay registros aún</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  time: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  historyTitle: {
    fontSize: 18,
    marginTop: 20,
  },
  row: {
    marginVertical: 10,
  },
});


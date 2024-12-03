import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import globalStyles from '../styles/globales'; // Importando los estilos globales

export default function WhatsApp() {
  const [contacto, setContacto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [contactos, setContactos] = useState([]);

  const agregarContacto = () => {
    if (contacto) {
      setContactos([...contactos, contacto]);
      setContacto('');
    }
  };

  const enviarMensaje = (contacto) => {
    // Aquí puede integrar la función para enviar mensaje por WhatsApp
    alert(`Mensaje enviado a ${contacto}: ${mensaje}`);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Gestionar Contactos de WhatsApp</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Número de teléfono"
        value={contacto}
        onChangeText={setContacto}
      />
      <Button title="Agregar Contacto" onPress={agregarContacto} />

      <TextInput
        style={globalStyles.input}
        placeholder="Mensaje"
        value={mensaje}
        onChangeText={setMensaje}
      />

      <ScrollView>
        {contactos.map((contacto, index) => (
          <View key={index} style={styles.contactRow}>
            <Text>{contacto}</Text>
            <Button title="Enviar Mensaje" onPress={() => enviarMensaje(contacto)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

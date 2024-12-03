import React from 'react';
import { View, Button } from 'react-native';
import SendIntentAndroid from 'react-native-send-intent';

export default function WhatsApp() {
  const sendMessage = (number, message) => {
    SendIntentAndroid.sendSms(number, message);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Enviar mensaje a los abuelos" onPress={() => sendMessage('1234567890', 'Hola, ¿cómo están?')} />
    </View>
  );
}

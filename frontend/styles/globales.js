import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0C0D8', // Color de fondo pastel
  },
  text: {
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Comic Sans MS', // Fuente tierna
  },
  button: {
    margin: 10,
    padding: 20,
    backgroundColor: '#FF89C6', // Color suave para los botones
    borderRadius: 30,           // Bordes redondeados
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Comic Sans MS',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 5,
  },
});

export default globalStyles;

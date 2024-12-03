import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0C0D8',
  },
  text: {
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
  },
  button: {
    margin: 10,
    padding: 15,
    backgroundColor: '#FF89C6',
    borderRadius: 10,
    width: 250,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default globalStyles;

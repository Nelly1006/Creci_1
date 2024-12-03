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
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
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
  loginButton: {
    fontSize: 18,
    color: '#FF89C6',
  },
});

export default globalStyles;

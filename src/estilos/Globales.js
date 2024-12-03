import { StyleSheet } from 'react-native';

// Estilos globales para usar en todas las pantallas
const globalStyles = StyleSheet.create({
  // Contenedor general para las pantallas
  container: {
    flex: 1,                  // Asegura que el contenedor ocupe toda la pantalla
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center',     // Centra el contenido horizontalmente
    backgroundColor: '#F0C0D8', // Color de fondo pastel
  },
  
  // Estilo para los textos generales
  text: {
    fontSize: 24,              // Tamaño de fuente grande
    color: '#333',             // Color oscuro para los textos
    textAlign: 'center',       // Alineación del texto en el centro
  },
  
  // Estilo para los botones
  button: {
    margin: 10,                // Espaciado entre los botones
    padding: 15,               // Relleno del botón
    backgroundColor: '#FF89C6', // Color de fondo del botón
    borderRadius: 10,          // Bordes redondeados
    width: 250,                // Ancho del botón
  },
  
  // Estilo para el texto de los botones
  buttonText: {
    fontSize: 18,              // Tamaño de la fuente del botón
    color: '#fff',             // Color blanco para el texto del botón
    textAlign: 'center',       // Centra el texto dentro del botón
  },
});

export default globalStyles;

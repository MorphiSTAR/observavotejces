import React, { useState } from 'react'; // Importa React y el hook useState
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Modal } from 'react-native'; // Importa componentes de React Native

// Componente funcional LinkImagenComponent
const LinkImagenComponent = ({ onUrlChange }) => {
  // Estados locales para la URL de la imagen y la visibilidad del modal
  const [imageUrl, setImageUrl] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // Función para manejar el cambio en la URL de la imagen
  const handleUrlChange = (url) => {
    setImageUrl(url); // Actualiza el estado de la URL de la imagen
    onUrlChange(url); // Llama a la función onUrlChange para pasar la URL al componente padre
  };

  // Función para manejar el guardado de la URL de la imagen
  const handleSaveImage = async () => {
    try {
      Alert.alert('Éxito', 'URL de imagen guardada correctamente'); // Muestra una alerta de éxito
      setModalVisible(false); // Oculta el modal
    } catch (error) {
      console.log('Error al guardar la URL de imagen:', error); // Log de errores en la consola
      Alert.alert('Error', 'Ocurrió un error al guardar la URL de imagen'); // Muestra una alerta de error
    }
  };

  // Renderizado del componente
  return (
    <View style={styles.container}>
      {/* Título del componente */}
      <Text style={styles.title}>Agregar URL de Imagen</Text>
      {/* Botón para abrir el modal */}
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Agregar link</Text>
      </TouchableOpacity>

      {/* Modal para ingresar la URL de la imagen */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Agregar Link de la Imagen</Text>
            {/* Input para ingresar la URL de la imagen */}
            <TextInput
              style={styles.input}
              placeholder="Ingrese la URL de la imagen"
              onChangeText={handleUrlChange}
              value={imageUrl}
            />
            {/* Botones dentro del modal */}
            <View style={styles.modalButtons}>
              {/* Botón para guardar la URL */}
              <TouchableOpacity style={[styles.button, styles.modalButton]} onPress={handleSaveImage}>
                <Text style={styles.buttonText}>Guardar</Text>
              </TouchableOpacity>
              {/* Botón para cancelar */}
              <TouchableOpacity style={[styles.button, styles.modalButton]} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3B5998',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro para el modal
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalButton: {
    width: '45%', // Ancho de cada botón en el modal
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default LinkImagenComponent; // Exporta el componente

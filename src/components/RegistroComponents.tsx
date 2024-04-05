// RegistroComponent.tsx

// Importaciones de React y componentes de React Native
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import SeleccionarImagenComponent from './SeleccionarImagenComponent';
import LinkImagenComponent from './LinkImagenComponent';
import { initDatabase, insertarEvento } from '../helpers/database';

// Componente funcional RegistroComponent
const RegistroComponent = () => {
  // Estados locales para la URL de la foto, los datos del formulario y la inicialización de la base de datos
  const [fotoUri, setFotoUri] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    fecha: '',
    Descripcion: '',
    fotoLink: '',
  });

  // Función para manejar la selección de imagen
  const handleImageSelected = (imageUri) => {
    setFotoUri(imageUri); // Actualiza la URL de la foto seleccionada
  };

  // Efecto para inicializar la base de datos al montar el componente
  useEffect(() => {
    initDatabase(); // Inicializa la base de datos
  }, []);

  // Función para manejar el envío del formulario
  const handleEnviar = async () => {
    try {
      // Imprime los datos a enviar en la consola
      console.log('Datos a enviar:', { ...formData, fotoUri });
      // Inserta el evento en la base de datos
      await insertarEvento(
        formData.nombre,
        formData.fecha,
        formData.Descripcion,
        fotoUri,
        formData.fotoLink
      );
      // Imprime el evento registrado en la consola
      console.log('Evento registrado:', { ...formData, fotoUri });
      // Muestra una alerta de éxito
      Alert.alert('Éxito', 'Evento registrado correctamente');
      // Reinicia los datos del formulario y la URL de la foto
      setFormData({ nombre: '', fecha: '', Descripcion: '', fotoLink: '' });
      setFotoUri('');
    } catch (error) {
      console.log('Error al registrar evento:', error); // Muestra errores en la consola
      // Muestra una alerta de error
      Alert.alert('Error', 'Ocurrió un error al registrar el evento');
    }
  };

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (name, value) => {
    // Actualiza los datos del formulario
    if (name === 'fotoLink') {
      setFormData({ ...formData, fotoLink: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Renderizado del componente
  return (
    <View style={styles.container}>
      {/* Título del formulario */}
      <Text style={styles.title}>Registrar Eventos</Text>
      <View style={styles.form}>
        {/* Campos del formulario */}
        <TextInput
          style={styles.input}
          placeholder="Nombre del evento"
          onChangeText={(value) => handleChange('nombre', value)}
          value={formData.nombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingresar fecha ej: 05/9/20217"
          onChangeText={(value) => handleChange('fecha', value)}
          value={formData.fecha}
        />
        <TextInput
          style={styles.input}
          placeholder="Descripción"
          onChangeText={(value) => handleChange('Descripcion', value)}
          value={formData.Descripcion}
        />
        {/* Componente para ingresar la URL de la imagen */}
        <LinkImagenComponent onUrlChange={(url) => handleChange('fotoLink', url)} />
        {/* Separador */}
        <Text style={styles.OR}>OR</Text>
        {/* Componente para seleccionar una imagen */}
        <SeleccionarImagenComponent onImageSelected={handleImageSelected} />
        {/* Botón para enviar el formulario */}
        <TouchableOpacity style={styles.button} onPress={handleEnviar}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  form: {
    width: '80%',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3B5998',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  OR:{
    color: '#64696b',
    fontWeight: 'bold',
    margin:11
    
  }
});

export default RegistroComponent; // Exporta el componente

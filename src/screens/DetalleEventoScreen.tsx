/* eslint-disable prettier/prettier */
// Morphy De oleo 
// 2020-9904

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image } from 'react-native-elements';

// Definición de los tipos para la lista de parámetros de la pantalla
export type RootStackParamList = {
  DetalleEvento: {
    id: number;
    nombre: string;
    fecha: string;
    descripcion: string;
    fotoUri: string;
    fotoLink: string;
  };
};

// Componente para mostrar los detalles del evento
const DetalleEventoScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'DetalleEvento'>> = ({ route }) => {
  // Extracción de parámetros de la ruta
  const { nombre, fecha, descripcion, fotoUri, fotoLink } = route.params;

  return (
    <View style={styles.container}>
      {/* Mostrar el nombre del evento */}
      <Text>Nombre: {nombre}</Text>
      {/* Mostrar la fecha del evento */}
      <Text>Fecha: {fecha}</Text>
      {/* Mostrar la descripción del evento */}
      <Text>Descripción: {descripcion}</Text>
      {/* Mostrar la imagen del evento si hay una URI proporcionada */}
      {fotoUri && <Image source={{ uri: fotoUri }} style={styles.image} />}
      {/* Mostrar la imagen del evento si hay un enlace proporcionado */}
      {fotoLink && <Image source={{ uri: fotoLink }} style={styles.image} />}
    </View>
  );
};

// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default DetalleEventoScreen;

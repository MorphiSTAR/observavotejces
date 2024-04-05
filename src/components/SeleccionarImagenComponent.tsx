/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
//Morphy De oleo 
//2020-9904
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { launchImageLibrary, MediaType } from 'react-native-image-picker';
import RNFS from 'react-native-fs';

interface SeleccionarImagenProps {
  onImageSelected: (imageUri: string) => void;
}

const SeleccionarImagenComponent: React.FC<SeleccionarImagenProps> = ({ onImageSelected }) => {
  const [fotoUri, setFotoUri] = useState<string>('');

  const seleccionarImagen = () => {
    const options = {
      mediaType: 'photo' as MediaType,
    };

    launchImageLibrary(options, async (response) => {
      if (response.errorCode) {
        console.log('Error al seleccionar imagen:', response.errorMessage);
      } else if (response.didCancel) {
        console.log('Selección cancelada');
      } else {
        try {
          if (response.assets && response.assets.length > 0) {
            const folderName = '911tracker';
            const folderPath = `${RNFS.DocumentDirectoryPath}/${folderName}`;
            
            // Crea la carpeta si no existe
            await RNFS.mkdir(folderPath);

            const imageName = `imagen_${Date.now()}.jpg`;
            const imagePath = `${folderPath}/${imageName}`;

            // Guarda la imagen en base64
            await RNFS.writeFile(imagePath, response.assets[0].uri, 'base64');

            // Verifica si la imagen se guardó correctamente
            if (await RNFS.exists(imagePath)) {
              console.log('Imagen guardada en:', imagePath);
              setFotoUri(imagePath);
              onImageSelected(imagePath);
            } else {
              console.log('Error al guardar la imagen: archivo no encontrado');
              Alert.alert('Error', 'No se pudo guardar la imagen');
            }
          } else {
            console.log('No se recibieron assets de imagen');
            Alert.alert('Error', 'No se pudo obtener la imagen seleccionada');
          }
        } catch (error) {
          console.log('Error al guardar la imagen:', error);
          Alert.alert('Error', 'No se pudo guardar la imagen');
        }
      }
    });
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={seleccionarImagen}>
        <Text style={styles.buttonText}>Seleccionar Imagen</Text>
      </TouchableOpacity>
      {fotoUri ? <Text>Imagen seleccionada: {fotoUri}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default SeleccionarImagenComponent;

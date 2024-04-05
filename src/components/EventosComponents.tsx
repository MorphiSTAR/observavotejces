// components/EventosComponent.tsx
//Morphy De oleo 
//2020-9904

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import { obtenerEventos, Evento } from '../helpers/database'; // Importa la función obtenerEventos y el tipo Evento

// Componente funcional EventosComponent
const EventosComponent: React.FC = () => {
  // Estados locales para almacenar eventos, evento seleccionado y estado de carga
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [eventoSeleccionado, setEventoSeleccionado] = useState<Evento | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Efecto para cargar eventos al montar el componente
  useEffect(() => {
    const cargarEventos = async () => {
      setIsLoading(true); // Muestra el indicador de carga
      try {
        const eventosObtenidos = await obtenerEventos(); // Obtiene eventos de la base de datos
        setEventos(eventosObtenidos); // Actualiza el estado de eventos
      } catch (error) {
        console.error('Error al obtener eventos:', error); // Muestra errores en la consola
      } finally {
        setIsLoading(false); // Oculta el indicador de carga
      }
    };

    cargarEventos(); // Llama a la función para cargar eventos
  }, []); // Se ejecuta solo al montar el componente

  // Función para mostrar el detalle de un evento
  const mostrarDetalleEvento = (evento: Evento) => {
    setEventoSeleccionado(evento); // Actualiza el estado del evento seleccionado
  };

  // Función para cerrar el detalle de un evento
  const cerrarDetalleEvento = () => {
    setEventoSeleccionado(null); // Limpia el estado del evento seleccionado
  };

  // Renderizado del componente
  return (
    <View style={styles.container}>
      {/* Renderiza eventos o muestra indicador de carga */}
      {isLoading ? (
        <Text>Cargando eventos...</Text>
      ) : (
        eventos.map((evento) => (
          <TouchableOpacity key={evento.id} style={styles.eventoContainer} onPress={() => mostrarDetalleEvento(evento)}>
            <View style={styles.eventoDetalles}>
              <Text style={styles.eventoNombre}>{evento.nombre}</Text>
              <Text style={styles.eventoFecha}>{evento.fecha}</Text>
              {evento.fotoLink && <Image source={{ uri: evento.fotoLink }} style={styles.imagepre} />}
            </View>
          </TouchableOpacity>
        ))
      )}

      {/* Modal para mostrar el detalle del evento seleccionado */}
      <Modal visible={!!eventoSeleccionado} animationType="slide">
        <View style={styles.modalContainer}>
          {/* Botón para cerrar el modal */}
          <TouchableOpacity onPress={cerrarDetalleEvento} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
          {/* Detalle del evento seleccionado */}
          {eventoSeleccionado && (
            <View style={styles.eventoDetalleContainer}>
              <Text style={styles.eventoNombre}>{eventoSeleccionado.nombre}</Text>
              <Text style={styles.eventoFecha}>{eventoSeleccionado.fecha}</Text>
              <Text style={styles.eventoDescripcion}>{eventoSeleccionado.descripcion}</Text>
              {/* Renderiza imagen del evento si hay URI proporcionada */}
              {eventoSeleccionado.fotoUri && <Image source={{ uri: eventoSeleccionado.fotoUri }} style={styles.image} />}
              {/* Renderiza imagen del evento si hay enlace proporcionado */}
              {eventoSeleccionado.fotoLink && <Image source={{ uri: eventoSeleccionado.fotoLink }} style={styles.image} />}
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  eventoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  eventoDetalles: {
    flex: 1,
  },
  eventoNombre: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  eventoFecha: {
    color: '#666',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  eventoDetalleContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%',
    alignItems: 'center',
  },
  eventoDescripcion: {
    marginTop: 10,
  },
  eventoImagen: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  imagepre: {
    width: 50,
    height: 50,
    marginTop: 20,
  },
});

export default EventosComponent; // Exporta el componente

/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

export const AcercaDeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Morphy De oleo Martinez</Text>
        <Text style={styles.sectionDescription}>
          Soy un apasionado desarrollador web y arquitecto de software con
          experiencia en desarrollo desde que comencé a aprender en 2019. Tengo
          experiencia en la gestión de horarios y tareas para obtener la máxima
          productividad. Me especializo en frameworks web y back-end como
          React.js, Next.js, Node.js, TypeScript, JavaScript, MongoDB, Firebase,
          entre otros. He tenido éxito en proyectos como freelancer, donde he
          demostrado habilidades técnicas y soluciones efectivas. Actualmente
          estudio desarrollo de software en el Instituto tecnológico de las
          Américas (ITLA). Mi compromiso con la excelencia y el aprendizaje
          continuo me asegura mantenerme al día con las últimas tendencias y,
          sobre todo, aplicar las mejores prácticas para entregar una excelente
          experiencia al usuario.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiencia</Text>
        <Text style={styles.sectionDescription}>
          Como desarrollador web y arquitecto de software con experiencia como
          freelancer, he liderado numerosos proyectos resolviendo problemas
          complejos de programación y entregando soluciones efectivas. Mi
          conocimiento abarca una amplia gama de tecnologías, incluyendo
          JavaScript, Node.js, TypeScript y .NET, junto con frameworks como
          React.js, Next.js y ASP.NET. Con habilidades en integración de métodos
          de pago y gestión de proyectos, estoy preparado para agregar valor
          inmediato a cualquier equipo de desarrollo.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.sectionDescription}>
          JavaScript, Node, TypeScript,: React.js, Next.js, ASP.NET, Angular,
          flutter, React native, kotlin
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Proyectos</Text>
        <Text style={styles.sectionDescription}>
          Muestra una lista de tus proyectos destacados con una breve
          descripción de cada uno.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Visita mi Portafolio Web</Text>
        <Text
          style={[styles.sectionDescription, styles.link]}
          onPress={() => {
            /* Agrega aquí la lógica para abrir el enlace */
          }}>
          https://morphy-porfolio.vercel.app
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reflexión sobre la Democracia:</Text>
        <Text style={styles.sectionDescription}>
          La democracia no es solo un sistema político, es un compromiso cívico
          y moral de participación activa en la construcción de una sociedad más
          justa y equitativa para todos.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 16,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default AcercaDeScreen;

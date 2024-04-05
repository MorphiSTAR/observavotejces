/* eslint-disable prettier/prettier */
// screens/EventosScreen.tsx
//Morphy De oleo 
//2020-9904
import React from 'react';
import { View, StyleSheet } from 'react-native';
import EventosComponent from '../components/EventosComponents';


export const EventosScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <EventosComponent />
     {/* <VerEventosComponent/>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
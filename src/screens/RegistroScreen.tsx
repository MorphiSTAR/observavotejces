/* eslint-disable prettier/prettier */
//Morphy De oleo 
//2020-9904
import React from 'react';
import {StyleSheet, View} from 'react-native';
import RegistroComponent from '../components/RegistroComponents';
import VerEventosComponent from '../components/VerEventosComponent';
import LinkImagenComponent from '../components/LinkImagenComponent';

export const RegistroScreen = () => {
  return (
    <View style={styles.container}>
          <RegistroComponent/>     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
 
  
});

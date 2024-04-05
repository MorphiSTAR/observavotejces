/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
//Morphy De oleo 
//2020-9904
import React from 'react';
//import { StyleSheet,  } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RegistroScreen} from '../screens/RegistroScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { EventosScreen } from '../screens/EventosScreen';
import AcercaDeScreen from '../screens/AcercaDeScree';



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Eventos"
        component={EventosScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Registro"
        component={RegistroScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="plus" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AcercaDe"
        component={AcercaDeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="info" size={size} color={color} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default TabNavigator;

//const styles = StyleSheet.create({})

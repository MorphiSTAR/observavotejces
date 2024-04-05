/* eslint-disable prettier/prettier */
//Morphy De oleo 
//2020-9904
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

export type RootStackParams = {
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={TabNavigator}
        options={{animation: 'default'}}
      />
    </Stack.Navigator>
  );
};

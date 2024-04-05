/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigator/Navigation';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import HomeScreen from './src/screens/HomeScreen';
//import SettingsScreen from './src/screens/SettingsScreen';

//const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Navigation />
      {/*<Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>*/}
    </NavigationContainer>
  );

}


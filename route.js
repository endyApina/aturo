import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home';
import EntryScreen from './src/screens/entry';

const Stack = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer> 
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      > 
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Entry" component={EntryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


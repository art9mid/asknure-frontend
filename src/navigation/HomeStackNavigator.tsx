import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {

  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
      />
    </Stack.Navigator>
  );
}

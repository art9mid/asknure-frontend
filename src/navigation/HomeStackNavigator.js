import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Post } from '../screens';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerTitle: 'askNURE',
        }}
      />
      <Stack.Screen
        name="PostScreen"
        component={Post}
        options={{
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
}

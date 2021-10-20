import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from '../screens';

const Stack = createStackNavigator();

export default function ProfileStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={Profile}
      />
    </Stack.Navigator>
  );
}

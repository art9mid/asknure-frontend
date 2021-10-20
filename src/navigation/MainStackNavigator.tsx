import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AddPost } from '../screens';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="AddPost"
        component={AddPost}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;

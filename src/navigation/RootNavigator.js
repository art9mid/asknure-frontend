import React from 'react';
import { useDispatch } from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import MainStackNavigator from './MainStackNavigator';
import { fetchPostsThunk } from '../redux/thunks/posts';

const Stack = createStackNavigator();

export function RootNavigator() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPostsThunk()).then(() => {
      RNBootSplash.hide({ fade: true });
    });
  }, []);

  return (
    <>
      <Stack.Navigator initialRouteName={'TabNavigator'}>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainStack"
          component={MainStackNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import MainStackNavigator from './MainStackNavigator';
import { fetchPostsThunk } from '../redux/thunks/posts';
import RNBootSplash from 'react-native-bootsplash';
import { useDispatch } from 'react-redux';

const Stack = createStackNavigator();

export function RootNavigator() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPostsThunk()).then(({ success }) => {
      RNBootSplash.hide({ fade: true }); // fade
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

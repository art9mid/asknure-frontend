import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Post } from '../screens';
import { LeftHeaderText, HeaderLeftBack, SearchHeaderRight } from '../components';
import dynamicStyles from './styles';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  const colorSchema = useColorScheme();
  const styles = dynamicStyles(colorSchema);
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerStyle: styles.headerStyle,
          headerTitle: '',
          headerRight: () => <SearchHeaderRight />,
          headerLeft: () => <LeftHeaderText>ASK NURE</LeftHeaderText>,
        }}
      />
      <Stack.Screen
        name="PostScreen"
        component={Post}
        options={{
          headerTitle: '',
          headerStyle: styles.headerStyle,
          headerLeft: () => <HeaderLeftBack />,
        }}
      />
    </Stack.Navigator>
  );
}

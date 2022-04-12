import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from '../screens';
import { LeftHeaderText, SearchHeaderRight } from '../components';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import dynamicStyles from './styles';

const Stack = createStackNavigator();

export default function ProfileStackNavigator() {
  const colorSchema = useColorScheme();
  const styles = dynamicStyles(colorSchema);
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          headerTitle: '',
          headerStyle: styles.headerStyle,
          headerRight: () => <SearchHeaderRight />,
          headerLeft: () => <LeftHeaderText>Профиль</LeftHeaderText>,
        }}
      />
    </Stack.Navigator>
  );
}

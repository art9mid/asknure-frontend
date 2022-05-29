import React, { useContext } from 'react';
import { useColorScheme } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from '../screens';
import dynamicStyles from './styles';
import { LeftHeaderText, SettingsHeaderRight } from '../components';
import { LocalizationContext } from '../localization';

const Stack = createStackNavigator();

export default function ProfileStackNavigator() {
  const { t } = useContext(LocalizationContext);

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
          headerRight: () => <SettingsHeaderRight />,
          headerLeft: () => <LeftHeaderText>{t('Profile')}</LeftHeaderText>,
        }}
      />
    </Stack.Navigator>
  );
}

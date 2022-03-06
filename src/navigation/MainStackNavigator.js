import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AddPost } from '../screens';
import { HeaderLeftBack, HeaderTitle } from '../components';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import dynamicStyles from './styles';

const Stack = createStackNavigator();

function MainStackNavigator() {
  const colorSchema = useColorScheme();
  const styles = dynamicStyles(colorSchema);
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="AddPost"
        component={AddPost}
        options={{
          headerTitle: () => <HeaderTitle title={'Создать пост'} />,
          headerLeft: () => <HeaderLeftBack />,
          headerStyle: styles.headerStyle,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;

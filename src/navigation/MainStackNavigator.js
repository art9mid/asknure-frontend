import React, { useContext } from 'react';
import { useColorScheme } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import dynamicStyles from './styles';
import {
  AddPost,
  ChangeUserAvatar,
  ChangeUserName,
  Language,
  Post,
  Settings,
  UserPosts,
  UserSettings,
} from '../screens';
import { HeaderLeftBack, HeaderTitle } from '../components';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import { LocalizationContext } from '../localization';

const Stack = createStackNavigator();

function MainStackNavigator() {
  const { t } = useContext(LocalizationContext);

  const colorSchema = useColorScheme();
  const styles = dynamicStyles(colorSchema);
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="AddPost"
        component={AddPost}
        options={{
          headerTitle: () => <HeaderTitle title={t('Ask a question')} />,
          headerLeft: () => <HeaderLeftBack />,
          headerStyle: styles.headerStyle,
        }}
      />
      <Stack.Screen
        name="UserPostsScreen"
        component={UserPosts}
        options={{
          headerStyle: styles.headerStyle,
          headerLeft: () => <HeaderLeftBack />,
          headerTitle: () => <HeaderTitle title={t('Questions')} />,
        }}
      />
      <Stack.Screen
        name="ChangeUserAvatar"
        component={ChangeUserAvatar}
        options={{
          headerStyle: styles.headerStyle,
          headerLeft: () => <HeaderLeftBack />,
          headerTitle: () => <HeaderTitle title={t('Change avatar')} />,
        }}
      />
      <Stack.Screen
        name="ChangeUserName"
        component={ChangeUserName}
        options={{
          headerStyle: styles.headerStyle,
          headerLeft: () => <HeaderLeftBack />,
          headerTitle: () => <HeaderTitle title={t('Change name')} />,
        }}
      />
      <Stack.Screen
        name="UserSettings"
        component={UserSettings}
        options={{
          headerStyle: styles.headerStyle,
          headerLeft: () => <HeaderLeftBack />,
          headerTitle: () => <HeaderTitle title={t('Profile settings')} />,
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
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerTitle: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: t('Settings'),
          headerLeft: () => <HeaderLeftBack />,
        }}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={{
          headerTitle: t('Change language'),
          headerLeft: () => <HeaderLeftBack />,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;

import React from 'react';
import { useColorScheme } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import dynamicStyles from './styles';
import { AddPost, ChangeUserAvatar, ChangeUserName, Post, UserPosts, UserSettings } from '../screens';
import { HeaderLeftBack, HeaderTitle } from '../components';
import SearchScreen from '../screens/SearchScreen/SearchScreen';

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
      <Stack.Screen
        name="UserPostsScreen"
        component={UserPosts}
        options={{
          headerStyle: styles.headerStyle,
          headerLeft: () => <HeaderLeftBack />,
          headerTitle: () => <HeaderTitle title={'Посты'} />,
        }}
      />
      <Stack.Screen
        name="ChangeUserAvatar"
        component={ChangeUserAvatar}
        options={{
          headerStyle: styles.headerStyle,
          headerLeft: () => <HeaderLeftBack />,
          headerTitle: () => <HeaderTitle title={'Изменить аватарку'} />,
        }}
      />
      <Stack.Screen
        name="ChangeUserName"
        component={ChangeUserName}
        options={{
          headerStyle: styles.headerStyle,
          headerLeft: () => <HeaderLeftBack />,
          headerTitle: () => <HeaderTitle title={'Изменить имя'} />,
        }}
      />
      <Stack.Screen
        name="UserSettings"
        component={UserSettings}
        options={{
          headerStyle: styles.headerStyle,
          headerLeft: () => <HeaderLeftBack />,
          headerTitle: () => <HeaderTitle title={'Настройки профиля'} />,
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
    </Stack.Navigator>
  );
}

export default MainStackNavigator;

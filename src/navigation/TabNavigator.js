import React from 'react';
import { Text, useColorScheme, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import dynamicStyles from './styles';
import AppStyles from '../AppStyles';
import { TabBar } from '../components';
import { HomeIcon } from '../SvgComponents';
import HomeStackNavigator from './HomeStackNavigator';
import { useNavigation } from '@react-navigation/native';
import ProfileStackNavigator from './ProfileStackNavigator';
import ProfileTabIcon from '../SvgComponents/ProfileTabIcon';

const Tab = createBottomTabNavigator();

const AddPost = () => {
  return <></>;
};

function TabNavigator() {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      tabBar={(props) => (
        <TabBar {...props} />
      )}
      initialRouteName={'Home'}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ active }) => <HomeIcon color={AppStyles.colorSet[colorScheme][active ? 'white' : 'grey2']} />,
        }}
      />
      <Tab.Screen
        name="AddModal"
        component={AddPost}
        options={{
          tabBarLabel: 'PlusQuestion',
          tabPress: () => {
            navigation.navigate('MainStack', { screen: 'AddPost' });
          },
          tabBarIcon: () => (
            <View style={styles.plusItemContainer}>
              <Text style={styles.plusItemText}>+</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({ active }) => <ProfileTabIcon
            color={AppStyles.colorSet[colorScheme][active ? 'white' : 'grey2']} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;

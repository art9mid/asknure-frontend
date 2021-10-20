import React from 'react';
import { Text, useColorScheme, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from '../components';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import { HomeIcon } from '../SvgComponents';
import dynamicStyles from './styles';
import ProfileTabIcon from '../SvgComponents/ProfileTabIcon';
import AppStyles from '../AppStyles';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function AddModal() {
  return <></>;
}

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
          tabBarIcon: ({active}) => <HomeIcon color={AppStyles.colorSet[colorScheme][active ? 'white' : 'grey2']} />,
        }}
      />
      <Tab.Screen
        name="AddModal"
        component={AddModal}
        options={{
          tabBarLabel: 'PlusQuestion',
          tabPress: () => {
            navigation.navigate('MainStack', {screen :'AddPost'})
          },
          tabBarIcon: ({active}) => (
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
          tabBarIcon: ({active}) => <ProfileTabIcon
            color={AppStyles.colorSet[colorScheme][active ? 'white' : 'grey2']} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;

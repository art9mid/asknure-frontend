import React from 'react';
import { useDispatch } from 'react-redux';
import { useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { MenuListItem } from '../../components';
import { SettingsIcon } from '../../SvgComponents';
import AppStyles from '../../AppStyles';
import { useNavigation } from '@react-navigation/native';
import { LOGOUT } from '../../redux/actions';

const UserSettings = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const dispatch = useDispatch();

  const menuNavigation = {
    userAvatar: () => {
      navigation.navigate('MainStack', { screen: 'ChangeUserAvatar' });
    },
    userName: () => {
      navigation.navigate('MainStack', { screen: 'ChangeUserName' });
    },
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <MenuListItem
        onPress={menuNavigation.userName}
        icon={<SettingsIcon color={AppStyles.colorSet[colorScheme].textColor} />}>
        Изменить имя
      </MenuListItem>
      <MenuListItem
        onPress={menuNavigation.userAvatar}
        icon={<SettingsIcon color={AppStyles.colorSet[colorScheme].textColor} />}>
        Изменить аватарку
      </MenuListItem>
      <MenuListItem
        noArrow
        onPress={logout}
        icon={<SettingsIcon color={AppStyles.colorSet[colorScheme].textColor} />}>
        Выйти
      </MenuListItem>
    </View>
  );
};

export default UserSettings;

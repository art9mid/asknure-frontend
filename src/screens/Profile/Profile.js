import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, ScrollView, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import RegisterFlow from './RegisterFlow/RegisterFlow';
import { logoutThunk } from '../../redux/thunks/user';
import { LocalizationContext } from '../../localization';
import { AppTitle, MenuListItem } from '../../components';
import AppStyles, { avatars, images } from '../../AppStyles';
import { BlockIcon, LogoutIcon, PencilIcon } from '../../SvgComponents';

const Profile = () => {
  const { t } = useContext(LocalizationContext);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <RegisterFlow />;
  }

  const menuNavigation = {
    logout() {
      dispatch(logoutThunk());
    },
    userPosts: () => {
      navigation.navigate('MainStack', { screen: 'UserPostsScreen' });
    },
    settings: () => {
      navigation.navigate('MainStack', { screen: 'Settings' });
    },
    userSettings: () => {
      navigation.navigate('MainStack', { screen: 'UserSettings' });
    },
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.content}>
          <View style={styles.userAvatarContainer}>
            {/http/.test(user.avatar) ? (
              <Image source={{ uri: user.avatar }} style={styles.userAvatar} />
            ) : (
              <Image source={avatars[user.avatar]} style={styles.userAvatar} />
            )}
          </View>
          <View style={styles.userInfo}>
            <View>
              <Text style={styles.username} numberOfLines={3}>{user.username}</Text>
              <Text style={styles.email}>{user.email}</Text>
            </View>
            <Pressable onPress={menuNavigation.userSettings} style={styles.editProfile}>
              <PencilIcon />
            </Pressable>
          </View>
        </View>
        <Image source={images.foreground} style={styles.foregroundImage} />
      </View>
      <View style={{ paddingTop: 10 }}>
        <AppTitle>{t('Profile menu')}</AppTitle>
        <MenuListItem
          onPress={menuNavigation.userPosts}
          icon={<BlockIcon color={AppStyles.colorSet[colorScheme].textColor} />}>
          {t('My questions')}
        </MenuListItem>
        <MenuListItem
          noArrow
          onPress={menuNavigation.logout}
          icon={<LogoutIcon color={AppStyles.colorSet[colorScheme].textColor} />}>
          {t('Logout')}
        </MenuListItem>
      </View>
    </ScrollView>
  );
};

export default Profile;

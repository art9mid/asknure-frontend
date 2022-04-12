import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, ScrollView, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import AppStyles, { avatars, images } from '../../AppStyles';
import RegisterFlow from './RegisterFlow/RegisterFlow';
import { AppTitle, MenuListItem } from '../../components';
import { BlockIcon, PencilIcon } from '../../SvgComponents';

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const user = useSelector((state) => state.user.user);
  const userLoading = useSelector((state) => state.user.userLoading);

  if (!user) {
    return <RegisterFlow />;
  }

  const menuNavigation = {
    userPosts: () => {
      // dispatch(refreshTokenThunk());
      navigation.navigate('MainStack', { screen: 'UserPostsScreen' });
    },
    userSettings: () => {
      navigation.navigate('MainStack', { screen: 'UserSettings' });
    },
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.content}>
          {/http/.test(user.avatar) ? (
            <Image source={{ uri: user.avatar }} style={styles.userAvatar} />
          ) : (
            <Image source={avatars[user.avatar]} style={styles.userAvatar} />
          )}
          <View style={styles.userInfo}>
            <View>
              <Text style={styles.username}>{user.username}</Text>
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
        <AppTitle>Меню профиля</AppTitle>
        <MenuListItem
          onPress={menuNavigation.userPosts}
          icon={<BlockIcon color={AppStyles.colorSet[colorScheme].textColor} />}>
          Мои посты
        </MenuListItem>
      </View>
    </ScrollView>
  );
};

export default Profile;

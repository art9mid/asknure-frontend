import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, Image, Pressable, SafeAreaView, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { avatars } from '../../AppStyles';
import { AppBtn, Loader } from '../../components';
import { updateUserInfoThunk } from '../../redux/thunks/user';
import { useNavigation } from '@react-navigation/native';
import { showErrorNotification, showSuccessNotification } from '../../utils/toast';
import { LocalizationContext } from '../../localization';

const ChangeUserAvatar = () => {
  const { t } = useContext(LocalizationContext);

  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const dispatch = useDispatch();

  const loading = useSelector((store) => store.user.updateUserLoading);

  const handleChangeAvatar = (id) => {
    dispatch(updateUserInfoThunk({ avatar: id })).then(({ success }) => {
      if (success) {
        showSuccessNotification(t('Avatar updated successfully'));
        navigation.navigate('Profile');
      } else {
        showErrorNotification(t('Something went wrong!'), t('Please try again later'));
      }
    });
  };

  const renderAvatars = ({ index, item }) => {
    return (
      <View style={styles.item}>
        <Pressable style={styles.itemPressed} onPress={() => handleChangeAvatar(item[0])}>
          <Image style={styles.image} height={80} width={80} source={item[1]} />
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loader opacity />}
      <FlatList
        contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 15 }}
        numColumns={2}
        data={Object.entries(avatars)}
        renderItem={renderAvatars}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};

export default ChangeUserAvatar;

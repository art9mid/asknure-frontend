import React from 'react';
import moment from 'moment';
import { Image, Pressable, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import AppStyles, { avatars } from '../../AppStyles';
import { UserAvatarIcon } from '../../SvgComponents';
import { LocalizationContext } from '../../localization';

function Comment({ item }) {
  const { t } = React.useContext(LocalizationContext);
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  return (
    <Pressable style={styles.container}>
      <View style={styles.userContainer}>
        {!item.photo ?
          <UserAvatarIcon color={AppStyles.colorSet[colorScheme].mainThemeColor} /> :
          /http/.test(item.photo) ? (
            <Image source={{ uri: item.photo }} style={styles.avatar} />
          ) : (
            <Image source={avatars[item.photo || 1]} style={styles.avatar} />
          )}
      </View>
      <View style={styles.content}>
        <Text style={styles.author}>
          {item.author || 'User'}
        </Text>
        {item.text && (
          <Text selectable style={styles.text}>
            {item.text}
          </Text>
        )}
        <Text style={styles.createdAt}>
          {t('The answer is written')} {moment(item.createdAt).fromNow()}
        </Text>
      </View>
    </Pressable>
  );
}

export default Comment;

import React from 'react';
import moment from 'moment';
import { Image, Pressable, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import AppStyles, { avatars } from '../../AppStyles';
import { UserAvatarIcon } from '../../SvgComponents';

function Comment({ item }) {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  const handleLongPress = () => {

  };

  return (
    <Pressable onLongPress={handleLongPress} style={styles.container}>
      <View style={styles.userContainer}>
        {!item.photo ?
          <UserAvatarIcon color={AppStyles.colorSet[colorScheme].mainThemeColor} /> :
          /http/.test(item.photo) ? (
            <Image source={{ uri: item.photo }} style={styles.avatar} />
          ) : (
            <Image source={avatars[item.photo]} style={styles.avatar} />
          )}
      </View>
      <View style={styles.content}>
        <Text style={styles.author}>
          {item.author}
        </Text>
        <Text style={styles.text}>
          {item.text}
        </Text>
        <Text style={styles.createdAt}>
          Ответ написан {moment(item.createdAt).fromNow()}
        </Text>
      </View>
    </Pressable>
  );
}

export default Comment;

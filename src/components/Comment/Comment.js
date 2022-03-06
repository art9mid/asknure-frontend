import React from 'react';
import moment from 'moment';
import { Image, Pressable, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { avatars } from '../../AppStyles';

function Comment({ item }) {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const handleLongPress = () => {

  };

  return (
    <Pressable onLongPress={handleLongPress} style={styles.container}>
      <Image
        width={'auto'}
        height={'auto'}
        style={styles.avatar}
        source={avatars[Math.ceil(Math.random() * 16)]}
      />
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

import React, { useContext } from 'react';
import moment from 'moment';
import { Image, Pressable, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import AppStyles, { avatars } from '../../AppStyles';
import { generateRandomColor } from '../../utils/randomColor';
import { UserAvatarIcon, ArrowRightIcon } from '../../SvgComponents';
import { LocalizationContext } from '../../localization';

function QuestionListItem({ item, onClick }) {
  const { t } = useContext(LocalizationContext);
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  if (!item.title) {
    return;
  }

  return (
    <Pressable onPress={onClick} style={[styles.container, { borderLeftColor: item.color || generateRandomColor() }]}>
      <View style={styles.userContainer}>
        {!item.photo ?
          <UserAvatarIcon color={AppStyles.colorSet[colorScheme].mainThemeColor} /> : /http/.test(item.photo) ? (
            <Image source={{ uri: item.photo }} style={styles.userAvatar} />
          ) : (
            <Image source={avatars[item.photo]} style={styles.userAvatar} />
          )}
      </View>
      <View style={styles.info}>
        <Text style={styles.answers}>{t('answers')}: {item.answersCount || '0'}</Text>
        <Text style={styles.title}>{item.title.length > 50 ? `${item.title.slice(0, 50).trim()}...` : item.title}</Text>
        <Text style={styles.date}>{moment(item.dateCreated).fromNow()}</Text>
      </View>
      <View style={styles.rightIcon}>
        <ArrowRightIcon color={AppStyles.colorSet[colorScheme].mainThemeColor} />
      </View>
    </Pressable>
  );
}

export default QuestionListItem;

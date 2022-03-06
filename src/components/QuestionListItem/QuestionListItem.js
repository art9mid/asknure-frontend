import React from 'react';
import moment from 'moment';
import { Pressable, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import AppStyles from '../../AppStyles';
import { generateRandomColor } from '../../utils/randomColor';
import { UserAvatarIcon, ArrowRightIcon } from '../../SvgComponents';

function QuestionListItem({ item, onClick }) {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  const getFullName = React.useCallback(() => {
    if (!item.username) {
      return;
    }
    const name = item.username
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
    if (name && name.length <= 2) {
      return name;
    }
    return name && name.slice(0, 2);
  }, [item.username]);

  if (!item.title) {
    return;
  }

  return (
    <Pressable onPress={onClick} style={[styles.container, { borderLeftColor: item.color || generateRandomColor() }]}>
      <View style={styles.userContainer}>
        <Text>{getFullName() || <UserAvatarIcon color={AppStyles.colorSet[colorScheme].mainThemeColor} />}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.answers}>answers: {item.answersCount || '0'}</Text>
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

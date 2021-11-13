import React from 'react';
import moment from 'moment';
import { Pressable, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { Question } from '../../models';
import { UserAvatarIcon, ArrowRightIcon, RequestIcon } from '../../SvgComponents';
import AppStyles from '../../AppStyles';
import { generateRandomColor } from '../../utils/randomColor';

function QuestionListItem({ item = Question }) {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  const getFullName = React.useCallback(() => {
    const name = item.username && item.username.split(' ').map((n) => n[0]).join('').toUpperCase();
    if (name && name.length <= 2) {
      return name;
    }
    return name && name.slice(0, 2);
  }, []);

  return (
    <Pressable
      onPress={() => null}
      style={[styles.container, { borderLeftColor: generateRandomColor() }]}
    >
      <View style={styles.userContainer}>
        <Text>{getFullName() || <UserAvatarIcon color={AppStyles.colorSet[colorScheme].tabBarColor} />}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.answers}>
          answers: {item.answersCount}
        </Text>
        <Text style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.date}>
          {moment(item.dateCreated).fromNow()}
        </Text>
      </View>
      <View style={styles.rightIcon}>
        <ArrowRightIcon color={AppStyles.colorSet[colorScheme].tabBarColor} />
      </View>
    </Pressable>
  );
}

export default QuestionListItem;

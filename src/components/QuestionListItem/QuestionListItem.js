import React, { useContext } from 'react';
import moment from 'moment';
import { Image, Pressable, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import AppStyles, { avatars } from '../../AppStyles';
import { UserAvatarIcon, ArrowRightIcon } from '../../SvgComponents';
import { LocalizationContext } from '../../localization';

function QuestionListItem({ item, onClick }) {
  const { t } = useContext(LocalizationContext);
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  if (!item.title) {
    return;
  }

  const renderImage = (() => {
    if (item.photo && /http/.test(item.photo)) {
      return (<Image source={{ uri: 'https://unsplash.it/400/400?image=1' }} style={styles.userAvatar} />);
    }
    if (item.photo) {
      return <Image source={avatars[item.photo]} style={styles.userAvatar} />;
    }
    if (!item.photo) {
      return <UserAvatarIcon color={AppStyles.colorSet[colorScheme].mainThemeColor} />;
    }
  })();

  return (
    <Pressable onPress={onClick} style={[styles.container]}>
      <View style={styles.userContainer}>
        {renderImage}
      </View>
      <View style={styles.info}>
        <Text style={styles.answers}>{t('answers')}: {item.answersCount || '0'}</Text>
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        {!!item.categories?.length && (
          <Text style={styles.category} numberOfLines={1}>{item.categories.join(', ')}</Text>
        )}
        <Text style={styles.date}>{moment(item.createdAt).fromNow()}</Text>
      </View>
      <View style={styles.rightIcon}>
        <ArrowRightIcon color={AppStyles.colorSet[colorScheme].mainThemeColor} />
      </View>
    </Pressable>
  );
}

export default QuestionListItem;

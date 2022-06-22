import React, { useContext } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Image, Pressable, Text, useColorScheme, View, Animated, Alert, LayoutAnimation } from 'react-native';
import dynamicStyles from './styles';
import AppStyles, { avatars } from '../../AppStyles';
import { UserAvatarIcon, ArrowRightIcon } from '../../SvgComponents';
import { LocalizationContext } from '../../localization';
import { DELETE_POST_ACTION_SUCCESS } from '../../redux/actions';
import { deletePostThunk } from '../../redux/thunks/posts';
import { showErrorNotification } from '../../utils/toast';
import { useNavigation } from '@react-navigation/native';

function UserQuestionListItem({ item, onClick }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { t } = useContext(LocalizationContext);
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  if (!item.title) {
    return;
  }

  const renderImage = (() => {
    if (item.photo && /http/.test(item.photo)) {
      return (<Image source={{ uri: item.photo }} style={styles.userAvatar} />);
    }
    if (item.photo) {
      return <Image source={avatars[item.photo]} style={styles.userAvatar} />;
    }
    if (!item.photo) {
      return <UserAvatarIcon color={AppStyles.colorSet[colorScheme].mainThemeColor} />;
    }
  })();

  const setAnimation = () => {
    LayoutAnimation.configureNext({
      duration: 300,
      create: {
        type: LayoutAnimation.Types.easeIn,
        property: LayoutAnimation.Properties.opacity,
        springDamping: 0.9,
      },
    });
  };

  const deletePost = () => {
    Alert.alert(
      t('Delete question'),
      t('Do you really want to delete this question?'),
      [
        {
          text: t('Delete'),
          onPress: () => {
            setAnimation();
            dispatch(deletePostThunk(item.id)).then(({ success }) => {
              if (!success) {
                showErrorNotification(t('Something went wrong!'), t('Please try again later'));
              }
            });
          },
          style: 'destructive',
        },
        {
          text: t('Cancel'),
          style: 'cancel',
        },
      ],
    );
  };

  const editPost = () => {
    navigation.navigate('MainStack', {
      screen: 'EditPost',
      params: {
        postId: item.id,
      },
    });
  };

  const RightActions = () => {
    return (
      <Animated.View style={styles.qaContainer}>
        <Pressable style={[styles.button, styles.button1]} onPress={editPost}>
          <Text style={[styles.buttonText, styles.button1Text]}>
            {t('Update')}
          </Text>
        </Pressable>
        <Pressable style={[styles.button, styles.button2]} onPress={deletePost}>
          <Text style={[styles.buttonText, styles.button2Text]}>
            {t('Delete')}
          </Text>
        </Pressable>
      </Animated.View>
    );
  };

  return (
    <Animated.View>
      <Swipeable renderRightActions={RightActions}>
        <Pressable onPress={onClick} style={styles.container}>
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
      </Swipeable>
    </Animated.View>
  );
}

export default UserQuestionListItem;

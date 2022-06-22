import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pressable, Animated, useColorScheme, Text, View } from 'react-native';
import dynamicStyles from './styles';
import UpArrowIcon from '../../SvgComponents/UpArrowIcon';
import { showErrorNotification } from '../../utils/toast';
import { MAX_POST_LENGTH } from '../../core/validation/post';
import { addPostCommentThunk } from '../../redux/thunks/posts';
import { useFormikWithErrorAutoClear } from '../../utils/formik';
import { opacityLayoutAnimation } from '../../utils/layoutAnimations';
import { AppTitle, Loader, MultilineTextInput } from '../../components';
import { LocalizationContext } from '../../localization';

const PostAnswer = ({ postId, setPost, post }) => {
  const { t } = useContext(LocalizationContext);

  const dispatch = useDispatch();
  const colorSchema = useColorScheme();
  const styles = dynamicStyles(colorSchema);
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.posts.addCommentLoading);

  const heightAnimation = React.useRef(new Animated.Value(0)).current;
  const borderWidthAnimation = React.useRef(new Animated.Value(0)).current;

  const withFixed = () => {
    Animated.timing(heightAnimation, {
      toValue: 40,
      duration: 300,
    }).start();
    Animated.timing(borderWidthAnimation, {
      toValue: 1,
      duration: 300,
    }).start();
  };
  const withDefault = () => {
    Animated.timing(heightAnimation, {
      toValue: 0,
      duration: 300,
    }).start();
    Animated.timing(borderWidthAnimation, {
      toValue: 0,
      duration: 300,
    }).start();
    borderWidthAnimation.current = 0;
  };

  const { formik } = useFormikWithErrorAutoClear(
    {
      initialValues: {
        text: '',
        photo: user?.avatar,
      },
      onSubmit: (params) => {
        dispatch(addPostCommentThunk(postId, params)).then((response) => {
          if (response.success) {
            opacityLayoutAnimation();
            setPost({ ...post, comments: [...post.comments, response.data] });
            formik.resetForm();
          } else {
            showErrorNotification(t('Something went wrong!'), t('Please try again later'));
          }
        });
      },
    },
    'addPostCommentError',
  );

  React.useEffect(() => {
    formik.setFieldValue('photo', user?.avatar);
  }, [user]);

  React.useEffect(() => {
    if (formik.values.text.trim().length) {
      withFixed();
    } else {
      withDefault();
    }
  }, [formik.values.text]);

  return (
    <>
      <AppTitle style={styles.title}>{t('Add answer')} 🙋</AppTitle>
      <View style={{ height: 210, position: 'relative' }}>
        {loading && <Loader opacity />}
        {!user && (
          <Text style={{ ...styles.userText, paddingBottom: 10 }}>
            {t('You must be logged in to comment on a post')}
          </Text>
        )}
        <MultilineTextInput
          onChangeText={formik.onValueChange('text')}
          value={formik.values.text}
          editable={!!user}
          multiline
          numberOfLines={6}
          placeholder={t('Add your answer')}
          maxLength={MAX_POST_LENGTH}
          style={{ paddingBottom: 45 }}
        />
        <Animated.View
          style={{
            ...styles.sendButtonContainer,
            height: heightAnimation,
            borderWidth: borderWidthAnimation,
          }}>
          <Text style={styles.counter}>
            {formik.values.text.trim().length}/{MAX_POST_LENGTH}
          </Text>
          <Pressable style={styles.sendButton} onPress={formik.handleSubmit}>
            <UpArrowIcon />
          </Pressable>
        </Animated.View>
      </View>
    </>
  );
};

export default PostAnswer;

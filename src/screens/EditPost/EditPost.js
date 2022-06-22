import {
  ScrollView,
  useColorScheme,
  View,
} from 'react-native';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  MultilineTextInput,
  AppTitle,
  AppBtn,
  Loader,
  AppTextInput,
} from '../../components';
import dynamicStyles from './styles';
import { fetchPostThunk, updatedPostThunk } from '../../redux/thunks/posts';
import { LocalizationContext } from '../../localization';
import { useFormikWithErrorAutoClear } from '../../utils/formik';
import { addPostValidation } from '../../core/validation/addPostValidation';
import { showErrorNotification, showSuccessNotification } from '../../utils/toast';

const EditPost = (props) => {
  const { t } = useContext(LocalizationContext);

  const postId = props.route.params.postId;

  const [loadingPost, setLoadingPost] = React.useState(true);

  React.useEffect(() => {
    dispatch(fetchPostThunk(postId)).then((response) => {
      setLoadingPost(false);
      if (!response.success) {
        showErrorNotification(t('Something went wrong!'), t('Please try again later'));
        navigation.goBack();
      } else {
        const respPost = response.data;

        formik.setFieldValue('title', respPost.title);
        formik.setFieldValue('text', respPost.text);
      }
    });
  }, [postId]);

  const dispatch = useDispatch();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const navigation = useNavigation();
  const loading = useSelector((state) => state.user.updatePostLoading);

  const { formik } = useFormikWithErrorAutoClear(
    {
      initialValues: {
        title: '',
        text: '',
      },
      onSubmit: (params) => {
        const dataToSend = {
          title: params.title.trim(),
          text: params.text.trim(),
        };
        dispatch(updatedPostThunk(postId, dataToSend)).then((response) => {
          if (response.success) {
            showSuccessNotification(t('Post successfully updated'), t('Your post is visible to all users of the ASKNURE forum!'));
            navigation.goBack();
          } else {
            showErrorNotification(t('Something went wrong!'), t('Please try again later'));
          }
        });
      },
      validate: addPostValidation(t),
    },
    'addPostError',
  );

  if (loadingPost) {
    return <Loader opacity />;
  }

  return (
    <View style={styles.container}>
      {loading && <Loader opacity text={t('Loading data')} />}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}>
        <AppTitle style={styles.title}>{t('Title')}</AppTitle>
        <AppTextInput
          style={{ marginBottom: 5, marginTop: 0 }}
          onBlur={formik.handleBlur('title')}
          onChangeText={formik.onValueChange('title')}
          value={formik.values.title}
          editable
          error={formik.touched.title && formik.errors.title}
          placeholder={t('Title') + '*'}
          maxLength={100}
        />
        <AppTitle style={styles.title}>{t('Description')}</AppTitle>
        <MultilineTextInput
          style={{ marginTop: 0 }}
          onChangeText={formik.onValueChange('text')}
          value={formik.values.text}
          editable
          multiline
          error={formik.errors.text}
          numberOfLines={6}
          maxLength={1000}
          placeholder={t('Ask people') + '...'}
        />
      </ScrollView>
      <AppBtn style={{ container: { paddingVertical: 5 } }} onPress={formik.handleSubmit}>
        {t('Save')}
      </AppBtn>
    </View>
  );
};

export default EditPost;

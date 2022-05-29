import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pressable, ScrollView, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { addPostThunk } from '../../redux/thunks/posts';
import { useNavigation } from '@react-navigation/native';
import { useFormikWithErrorAutoClear } from '../../utils/formik';
import { addPostValidation } from '../../core/validation/addPostValidation';
import { showErrorNotification, showSuccessNotification } from '../../utils/toast';
import { MultilineTextInput, AppTitle, AppBtn, Loader, FilePicker, AppModal } from '../../components';
import { LocalizationContext } from '../../localization';

const AddPost = (props) => {
  const { t } = useContext(LocalizationContext);

  const dispatch = useDispatch();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const navigation = useNavigation();
  const loading = useSelector((state) => state.posts.addPostsLoading);
  const user = useSelector((state) => state.user.user);

  const [files, setFiles] = React.useState(null);
  const [authorized, setAuthorized] = React.useState(user);

  const { formik } = useFormikWithErrorAutoClear(
    {
      initialValues: {
        title: '',
      },
      onSubmit: (params) => {
        dispatch(addPostThunk({ ...params }, files)).then((response) => {
          if (response.success) {
            showSuccessNotification(t('Post successfully created'), t('Your post is visible to all users of the ASKNURE forum!'));
            navigation.navigate('Home');
          } else {
            showErrorNotification(t('Something went wrong!'), t('Please try again later'));
          }
        });
      },
      validate: addPostValidation(),
    },
    'addPostError',
  );

  const handleBack = React.useCallback(() => {
    navigation.goBack();
    setAuthorized(true);
  }, [navigation]);

  const handleCreateUser = React.useCallback(() => {
    navigation.navigate('Profile');
    setAuthorized(true);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AppModal visible={!authorized}>
        <Text style={styles.modalTitle}>{t('You are not authorized')}</Text>
        <Text style={styles.modalDescription}>
          {t('Create an account to access all ASKNURE features')}
        </Text>
        <View style={styles.modalFooter}>
          <Pressable style={styles.modalBack} onPress={handleBack}>
            <Text style={styles.modalBackText}>
              {t('Back')}
            </Text>
          </Pressable>
          <AppBtn onPress={handleCreateUser} secondary style={{ button: { height: 45 } }}>
            {t('Create an account')}
          </AppBtn>
        </View>
      </AppModal>
      {loading && <Loader opacity text={'Загружаем данные'} />}
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <AppTitle style={styles.title}>👋 {t('Ask people')}</AppTitle>
        <MultilineTextInput
          onBlur={formik.handleBlur('title')}
          onChangeText={formik.onValueChange('title')}
          value={formik.values.title}
          editable
          multiline
          error={formik.touched.title && formik.errors.title}
          numberOfLines={6}
          placeholder={'Спросите у людей с ХНУРЭ …'}
        />
        <AppTitle>📁 {t('Add image or documents')}</AppTitle>
        <FilePicker contentContainerStyle={{ paddingVertical: 5 }} files={files} setFiles={setFiles} />
      </ScrollView>
      <AppBtn style={{ container: { paddingVertical: 15 } }} onPress={formik.handleSubmit}>
        {t('Publish')}
      </AppBtn>
    </View>
  );
};

export default AddPost;

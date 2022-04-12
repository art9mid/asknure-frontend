import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pressable, ScrollView, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { addPostThunk } from '../../redux/thunks/posts';
import { useNavigation } from '@react-navigation/native';
import { useFormikWithErrorAutoClear } from '../../utils/formik';
import { addPostValidation } from '../../core/validation/addPostValidation';
import { showErrorNotification, showSuccessNotification } from '../../utils/toast';
import { MultilineTextInput, AppTitle, AppBtn, Loader, FilePicker, AppModal } from '../../components';

const AddPost = (props) => {
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
        dispatch(addPostThunk({ ...params })).then((response) => {
          if (response.success) {
            showSuccessNotification('Пост успешно создан', 'Ваш пост видят все пользователи форума хнурэ!');
            navigation.navigate('Home');
          } else if (response?.error?.code === 'storage/file-not-found') {
            showErrorNotification('Путь к локальному файлу утрачен', 'Убедитесь что вы не удалили файл с устройства');
          } else {
            showErrorNotification('Что-то пошло не так!', 'Попробуйте повторить попытку позже');
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
        <Text style={styles.modalTitle}>Вы не авторизированы!</Text>
        <Text style={styles.modalDescription}>
          Создайте аккаунт чтобы получить доступ к всем функциям asknure. Создать аккаунт можно перейдя в профиль
          пользователя или нажав на кнопку "Создать аккаунт"
        </Text>
        <View style={styles.modalFooter}>
          <Pressable style={styles.modalBack} onPress={handleBack}>
            <Text style={styles.modalBackText}>Надаз</Text>
          </Pressable>
          <AppBtn onPress={handleCreateUser} secondary style={{ button: { height: 45 } }}>
            Создать аккаунт
          </AppBtn>
        </View>
      </AppModal>
      {loading && <Loader opacity text={'Загружаем данные'} />}
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <AppTitle style={styles.title}>👋 Спросить людей</AppTitle>
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
        <AppTitle>📁 Добавить изображение/документы</AppTitle>
        <FilePicker contentContainerStyle={{ paddingVertical: 5 }} files={files} setFiles={setFiles} />
      </ScrollView>
      <AppBtn style={{ container: { paddingVertical: 15 } }} onPress={formik.handleSubmit}>
        Опубликовать
      </AppBtn>
    </View>
  );
};

export default AddPost;

import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { ScrollView, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import AppStyles from '../../AppStyles';
import { MultilineTextInput, AppTitle, AppBtn, Loader, FilePicker } from '../../components';
import { useFormikWithErrorAutoClear } from '../../utils/formik';
import { addPostValidation } from '../../core/validation/addPostValidation';
import { addPostThunk } from '../../redux/thunks/posts';
import { useDispatch, useSelector } from 'react-redux';
import { showErrorNotification, showSuccessNotification } from '../../utils/toast';
import { useNavigation } from '@react-navigation/native';

const AddPost = (props) => {
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const navigation = useNavigation();
  const loading = useSelector((state) => state.posts.addPostsLoading);

  const [files, setFiles] = React.useState(null);

  const { formik } = useFormikWithErrorAutoClear(
    {
      initialValues: {
        title: '',
        isAnonimus: true,
      },
      onSubmit: (params) => {
        dispatch(addPostThunk({ ...params, files })).then((response) => {
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

  const options = [
    { label: 'Аноним', value: 'true' },
    { label: 'Я', value: 'false' },
  ];

  return (
    <View style={styles.container}>
      {loading && <Loader opacity text={'Загружаем данные'} />}
      <ScrollView style={{ flex: 1 }}>
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
        <AppTitle>🧐 От какого лица вы хотите задать вопрос ?</AppTitle>
        <SwitchSelector
          style={styles.switchSelector}
          selectedTextStyle={{ fontWeight: '700' }}
          textColor={AppStyles.colorSet[colorScheme].grey2}
          buttonColor={AppStyles.colorSet[colorScheme].mainThemeColor}
          activeColor={AppStyles.colorSet[colorScheme].textColor}
          selectedColor={AppStyles.colorSet[colorScheme].whiteText}
          borderRadius={10}
          animationDuration={200}
          initial={0}
          onPress={formik.onValueChange('isAnonimus')}
          options={options}
        />
      </ScrollView>
      <AppBtn onPress={formik.handleSubmit}>Опубликовать</AppBtn>
    </View>
  );
};

export default AddPost;

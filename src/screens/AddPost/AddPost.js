import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { ScrollView, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import AppStyles from '../../AppStyles';
import { MultilineTextInput, AppTitle, AppBtn, ErrorText, Loader } from '../../components';
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

  const { formik, error } = useFormikWithErrorAutoClear(
    {
      initialValues: {
        title: '',
        isAnonimus: true,
      },
      onSubmit: (params) => {
        dispatch(addPostThunk(params)).then(({ success }) => {
          if (success) {
            showSuccessNotification('Пост успешно создан', 'Ваш пост видят все пользователи форума хнурэ!');
            navigation.navigate('Home');
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
    <ScrollView contentContainerStyle={styles.container}>
      {loading && <Loader opacity />}
      <View>
        <AppTitle style={styles.title}>👋 Спросить людей</AppTitle>
        <MultilineTextInput
          onBlur={formik.handleBlur('title')}
          onChangeText={formik.onValueChange('title')}
          value={formik.values.title}
          editable
          multiline
          numberOfLines={6}
          placeholder={'Спросите у людей с ХНУРЭ …'}
        />
        {!!formik?.errors?.title && <ErrorText>{formik.errors.title}</ErrorText>}
        <AppTitle>🧐 От какого лица вы хотите задать вопрос ?</AppTitle>
        <SwitchSelector
          style={styles.switchSelector}
          selectedTextStyle={{ fontWeight: '700' }}
          textColor={AppStyles.colorSet[colorScheme].grey2}
          buttonColor={AppStyles.colorSet[colorScheme].tabBarColor}
          activeColor={AppStyles.colorSet[colorScheme].textColor}
          selectedColor={AppStyles.colorSet[colorScheme].whiteText}
          borderRadius={10}
          animationDuration={200}
          initial={0}
          onPress={formik.onValueChange('isAnonimus')}
          options={options}
        />
      </View>
      <AppBtn disabled={!formik.isValid} onPress={formik.handleSubmit}>
        Опубликовать
      </AppBtn>
    </ScrollView>
  );
};

export default AddPost;

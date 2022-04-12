import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { AppBtn, AppTextInput, Loader } from '../../components';
import { useFormikWithErrorAutoClear } from '../../utils/formik';
import { updateUserInfoThunk } from '../../redux/thunks/user';
import { showErrorNotification, showSuccessNotification } from '../../utils/toast';
import { useNavigation } from '@react-navigation/native';

const ChangeUserName = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user.user);
  const loading = useSelector((store) => store.user.updateUserLoading);

  const { formik } = useFormikWithErrorAutoClear({
    initialValues: {
      username: user.username,
    },
    validate: (values) => {
      if (!values.username) {
        return { username: 'Введите имя пользователя' };
      }
      return {};
    },
    onSubmit: (value) => {
      dispatch(updateUserInfoThunk(value)).then(({ success }) => {
        if (success) {
          showSuccessNotification('Имя пользователя успешно обновлен');
          navigation.navigate('Profile');
        } else {
          showErrorNotification('Что-то пошло не так!');
        }
      });
    },
  });

  return (
    <View style={styles.container}>
      {loading && <Loader opacity />}
      <View>
        <AppTextInput
          error={formik.errors.username}
          value={formik.values.username}
          onChangeText={formik.onValueChange('username')}
          maxLength={60}
        />
        <Text style={styles.text}>
          Под этим именем вы будете создавать посты и писать комментарии. Все пользователи будут видит ваше новое имя!
        </Text>
      </View>
      <AppBtn onPress={formik.handleSubmit} disabled={!formik.isValid || user.username === formik.values.username}>
        Сохранить
      </AppBtn>
    </View>
  );
};

export default ChangeUserName;

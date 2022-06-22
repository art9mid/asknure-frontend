import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { AppBtn, AppTextInput, AuthModal, Loader } from '../../components';
import { useFormikWithErrorAutoClear } from '../../utils/formik';
import { showErrorNotification, showSuccessNotification } from '../../utils/toast';
import { useNavigation } from '@react-navigation/native';
import { LocalizationContext } from '../../localization';
import { addCategoryThunk } from '../../redux/thunks/categories';

const AddCategory = () => {
  const { t } = useContext(LocalizationContext);

  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user.user);
  const loading = useSelector((store) => store.categories.addCategoryLoading);

  const [authorized, setAuthorized] = React.useState(user);

  const { formik } = useFormikWithErrorAutoClear({
    initialValues: {
      name: '',
    },
    validate: (values) => {
      if (!values.name) {
        return { name: t('Enter a category') };
      }
      if (values.name && values.name.length < 2) {
        return { name: t('The minimum number of characters is 2') };
      }
      return {};
    },
    onSubmit: (value) => {
      dispatch(addCategoryThunk(value)).then((response) => {
        if (response.success) {
          showSuccessNotification(t('A category has been created!'), t('Now you can select it in the category list'));
          navigation.goBack();
        } else if(response.code === 400) {
          showErrorNotification(t('This category has already been created!'));
        }
      });
    },
  });

  return (
    <View style={styles.container}>
      {loading && <Loader opacity />}
      <AuthModal visible={authorized} setVisible={setAuthorized} />
      <AppTextInput
        placeholder={t('Category name')}
        error={formik.errors.name}
        value={formik.values.name}
        onChangeText={formik.onValueChange('name')}
        maxLength={60}
      />
      <Text style={styles.text}>
        {t('If you can\'t find your category, create your own')}
      </Text>
      <AppBtn onPress={formik.handleSubmit} disabled={!formik.isValid}>
        {t('Save')}
      </AppBtn>
    </View>
  );
};

export default AddCategory;

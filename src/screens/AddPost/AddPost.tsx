import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { ScrollView, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import AppStyles from '../../AppStyles';
import { MultilineTextInput, AppTitle, AppBtn, ErrorText } from '../../components';
import { useFormikWithErrorAutoClear } from '../../utils/formik';
import { addPostValidation } from '../../core/validation/addPostValidation';

const AddPost = () => {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const [switchValue, setSwitchValue] = React.useState(true);

  const { formik, error } = useFormikWithErrorAutoClear({
    initialValues: {
      text: '',
      isAnonimus: switchValue,
    },
    onSubmit: () => {

    },
    validate: addPostValidation(),
  }, 'addPostError');

  const options = [
    { label: 'Аноним', value: 'anonymous' },
    { label: 'Я', value: 'user' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <AppTitle style={styles.title}>👋 Спросить людей</AppTitle>
        <MultilineTextInput
          onBlur={formik.handleBlur('text')}
          onChangeText={formik.onValueChange('text')}
          value={formik.values.text}
          editable
          multiline
          numberOfLines={6}
          placeholder={'Спросите у людей с ХНУРЭ …'}
        />
        {!!formik?.errors?.text && <ErrorText>{formik.errors.text}</ErrorText>}
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
          onPress={(value) => setSwitchValue(value)}
          options={options}
        />
      </View>
      <AppBtn disabled={!formik.isValid} onPress={formik.handleSubmit}>Опубликовать</AppBtn>
    </ScrollView>
  );
};

export default AddPost;

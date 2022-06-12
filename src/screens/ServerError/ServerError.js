import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, StatusBar, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { AppBtn, AppTextInput, Loader } from '../../components';
import { useFormikWithErrorAutoClear } from '../../utils/formik';
import { updateUserInfoThunk } from '../../redux/thunks/user';
import { showErrorNotification, showSuccessNotification } from '../../utils/toast';
import { useNavigation } from '@react-navigation/native';
import { LocalizationContext } from '../../localization';
import { NoInternetIcon } from '../../SvgComponents';
import AppStyles from '../../AppStyles';

const ServerError = () => {
  const { t } = useContext(LocalizationContext);

  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const dispatch = useDispatch();


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <NoInternetIcon color={AppStyles.colorSet[colorScheme].textColor} />
      <Text style={styles.title}>{t('No connection')}</Text>
      <Text style={styles.text}>{t('Check your connection and try again')}</Text>
    </SafeAreaView>
  );
};

export default ServerError;

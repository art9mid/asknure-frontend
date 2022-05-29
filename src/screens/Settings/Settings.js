import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useColorScheme, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dynamicStyles from './styles';
import { MenuListItem } from '../../components';
import { LanguageIcon, SettingsIcon } from '../../SvgComponents';
import AppStyles from '../../AppStyles';
import { LocalizationContext } from '../../localization';

const Settings = () => {
  const { t } = useContext(LocalizationContext);

  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const dispatch = useDispatch();
  const navigations = {
    language: () => {
      navigation.navigate('MainStack', { screen: 'Language' });
    },
  };

  return (
    <View style={styles.container}>
      <MenuListItem
        onPress={navigations.language}
        icon={<LanguageIcon color={AppStyles.colorSet[colorScheme].textColor} />}>
        {t('Change language')}
      </MenuListItem>
    </View>
  );
};

export default Settings;

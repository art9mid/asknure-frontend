import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, useColorScheme, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dynamicStyles from './styles';
import { LocalizationContext, supportedLanguages } from '../../localization';
import { AppBtn, AppCheckedListItem } from '../../components';
import AppStyles from '../../AppStyles';
import { CHANGE_LANGUAGE } from '../../redux/actions';

const Language = () => {
  const { t, setLocale } = useContext(LocalizationContext);

  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const dispatch = useDispatch();
  const locale = useSelector((store) => store.app.locale);
  const [selectedLanguage, setSelectedLanguage] = React.useState(locale);

  const onChangeLanguageAccept = async () => {
    dispatch({ type: CHANGE_LANGUAGE, data: selectedLanguage });
    setLocale(selectedLanguage);
    await navigation.navigate('Profile');
  };

  const drawLanguageOption = ({ tag, name }) => {
    return (
      <AppCheckedListItem
        icon={AppStyles.flagSet[tag]}
        key={tag}
        onPress={() => setSelectedLanguage(tag)}
        isChecked={tag === selectedLanguage}>
        {name}
      </AppCheckedListItem>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        {supportedLanguages.map(drawLanguageOption)}
      </View>
      <SafeAreaView>
        <AppBtn onPress={onChangeLanguageAccept}>
          {t('Save')}
        </AppBtn>
      </SafeAreaView>
    </View>
  );
};

export default Language;
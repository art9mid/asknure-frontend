import React from 'react';
import { Image, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import AppStyles from '../../AppStyles';
import { AppBtn } from '../index';
import { LocalizationContext } from '../../localization';

function NothingToShow({ title = '', onPress = null, children }) {
  const { t } = React.useContext(LocalizationContext);
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  return (
    <View style={styles.container}>
      <Image source={AppStyles.iconSet.nothingToShow} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title ? title : t('There\'s nothing here')}</Text>
      </View>
      {!!onPress && (
        <AppBtn onPress={onPress}>
          {children}
        </AppBtn>
      )}
    </View>
  );
}

export default NothingToShow;

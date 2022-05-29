import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { SearchIcon, SettingsIcon } from '../../../SvgComponents';
import AppStyles from '../../../AppStyles';

function SettingsHeaderRight() {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const navigation = useNavigation();

  const goToSettingsScreen = () => navigation.navigate('MainStack', { screen: 'Settings' });

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable style={styles.iconContainer} onPress={goToSettingsScreen}>
        <SettingsIcon color={AppStyles.colorSet[colorScheme].textColor} />
      </Pressable>
    </View>
  );
}

export default SettingsHeaderRight;

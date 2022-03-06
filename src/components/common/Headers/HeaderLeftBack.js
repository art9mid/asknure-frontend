import React from 'react';
import { Platform, Pressable, useColorScheme, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationBackIcon } from '../../../SvgComponents';
import AppStyles from '../../../AppStyles';

function HeaderLeftBack() {
  const navigation = useNavigation();
  const colorSchema = useColorScheme();

  function goBack() {
    navigation.pop();
  }

  if (Platform.OS === 'android') {
    return <View />;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      <Pressable
        style={{
          paddingHorizontal: 10,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={goBack}>
        <NavigationBackIcon size={28} color={AppStyles.colorSet[colorSchema].mainThemeColor} />
      </Pressable>
    </View>
  );
}

export default HeaderLeftBack;

import React from 'react';
import { View, useColorScheme } from 'react-native';
import { MaterialIndicator } from 'react-native-indicators';
import dynamicStyles from './styles';
import AppStyles from '../../AppStyles';

export default function Loader({ style = {}, opacity = false }) {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  return (
    <View
      style={[
        styles.container,
        style,
        opacity && { backgroundColor: AppStyles.colorSet[colorScheme].whiteWithLightOpacity },
      ]}>
      <MaterialIndicator color={AppStyles.colorSet[colorScheme].tabBarColor} size={50} animationDuration={5000} />
    </View>
  );
};

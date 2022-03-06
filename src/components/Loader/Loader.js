import React from 'react';
import { View, useColorScheme, Text } from 'react-native';
import { MaterialIndicator } from 'react-native-indicators';
import dynamicStyles from './styles';
import AppStyles from '../../AppStyles';

export default function Loader({ style = {}, opacity = false, text }) {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  return (
    <View
      style={[
        styles.container,
        style,
        opacity && { backgroundColor: AppStyles.colorSet[colorScheme].whiteWithLightOpacity },
      ]}>
      <View style={{ height: 50 }}>
        <MaterialIndicator color={AppStyles.colorSet[colorScheme].mainThemeColor} size={50} animationDuration={5000} />
      </View>
      {typeof text === 'string' && !!text.length && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};

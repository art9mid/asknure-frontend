import React from 'react';
import { TextInput, TextInputProps, useColorScheme } from 'react-native';
import dynamicStyles from './styles';
import AppStyles from '../../AppStyles';

function MultilineTextInput({ onChangeText, value, numberOfLines = 4, ...restProps }) {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  return (
    <TextInput
      numberOfLines={numberOfLines}
      onChangeText={text => onChangeText(text)}
      value={value}
      style={styles.input}
      placeholderTextColor={AppStyles.colorSet[colorScheme].grey1}
      {...restProps}
    />
  );
}

export default MultilineTextInput;

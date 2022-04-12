import React from 'react';
import { TextInput, useColorScheme } from 'react-native';
import dynamicStyles from './styles';
import AppStyles from '../../AppStyles';
import { ErrorText } from '../index';

function AppTextInput({ onChangeText, value, error, style, ...restProps }) {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  return (
    <>
      <TextInput
        onChangeText={(text) => onChangeText(text)}
        value={value}
        style={[styles.input, error && styles.inputError, style]}
        placeholderTextColor={AppStyles.colorSet[colorScheme].grey1}
        {...restProps}
      />
      {typeof error === 'string' && <ErrorText>{error}</ErrorText>}
    </>
  );
}

export default AppTextInput;

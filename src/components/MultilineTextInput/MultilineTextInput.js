import React from 'react';
import { TextInput, useColorScheme } from 'react-native';
import dynamicStyles from './styles';
import AppStyles from '../../AppStyles';
import { ErrorText } from '../index';

function MultilineTextInput({ onChangeText, value, error, style, numberOfLines = 4, ...restProps }) {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  return (
    <>
      <TextInput
        numberOfLines={numberOfLines}
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

export default MultilineTextInput;

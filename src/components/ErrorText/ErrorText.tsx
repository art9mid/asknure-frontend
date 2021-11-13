import React from 'react';
import { Text, useColorScheme } from 'react-native';
import dynamicStyles from './styles';

const ErrorText = ({ children, style = {} }) => {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  return (
    <Text style={[styles.error, style]}>{children}</Text>
  );
};
export default ErrorText;

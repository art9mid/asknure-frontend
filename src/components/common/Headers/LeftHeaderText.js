import React from 'react';
import { Text, View, useColorScheme } from 'react-native';
import dynamicStyles from './styles';

function LeftHeaderText({ children }) {
  const colorSchema = useColorScheme();
  const styles = dynamicStyles(colorSchema);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default LeftHeaderText;

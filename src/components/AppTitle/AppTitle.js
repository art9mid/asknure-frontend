import React from 'react';
import { Text, View, useColorScheme } from 'react-native';
import dynamicStyles from './styles';

function AppTitle({ children }) {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
      <View style={styles.titleLine} />
    </View>
  );
}

export default AppTitle;

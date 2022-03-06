import React from 'react';
import { Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';

function HomeLeftHeader() {
  const colorSchema = useColorScheme();
  const styles = dynamicStyles(colorSchema);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ASK NURE</Text>
    </View>
  );
}

export default HomeLeftHeader;

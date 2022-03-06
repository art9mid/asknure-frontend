import React from 'react';
import { Text, useColorScheme } from 'react-native';
import dynamicStyles from './styles';

function HeaderTitle({ title }) {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  return (
    <Text numberOfLines={1} style={styles.pageHeaderTitle}>{title}</Text>
  );
}

export default HeaderTitle;

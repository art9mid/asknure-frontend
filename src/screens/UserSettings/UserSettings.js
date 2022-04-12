import React from 'react';
import { useDispatch } from 'react-redux';
import { Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';

const ChangeUserName = () => {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>chage name</Text>
    </View>
  );
};

export default ChangeUserName;

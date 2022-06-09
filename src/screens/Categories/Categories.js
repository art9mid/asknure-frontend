import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { useNavigation } from '@react-navigation/native';
import { LocalizationContext } from '../../localization';

const Categories = () => {
  const { t } = useContext(LocalizationContext);

  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user.user);

  return (
    <View style={styles.container}>
      <Text>
        s
      </Text>
    </View>
  );
};

export default ChangeUserName;

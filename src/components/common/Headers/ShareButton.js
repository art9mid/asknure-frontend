import React from 'react';
import { Pressable, View, useColorScheme } from 'react-native';
import dynamicStyles from './styles';
import AppStyles from '../../../AppStyles';
import { ShareIcon } from '../../../SvgComponents';

const ShareButton = ({ onPress = () => null }) => {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  return (
    <View style={styles.shareContainer}>
      <Pressable onPress={onPress} style={styles.iconContainer}>
        <ShareIcon size={25} color={AppStyles.colorSet[colorScheme].mainThemeColor} />
      </Pressable>
    </View>
  );
};

export default ShareButton;

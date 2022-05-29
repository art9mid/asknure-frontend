import React from 'react';
import { Image, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import dynamicStyles from './styles';
import { CheckIcon } from '../../SvgComponents';

function AppCheckedListItem({ onPress, icon, children, isChecked, subText = '', bigIcon = false }) {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.list}>
      <View style={styles.listContent}>
        {!!icon && (
          <View style={styles.iconContainer}>
            <Image source={icon} style={[styles.listIcon, bigIcon && styles.listBigIcon]} />
          </View>
        )}
        <View>
          <Text style={styles.listText}>{children}</Text>
          {!!subText && <Text style={styles.listSubText}>{subText}</Text>}
        </View>
      </View>
      {isChecked && (
        <View style={styles.rightContent}>
          <CheckIcon />
        </View>
      )}
    </TouchableOpacity>
  );
}

export default AppCheckedListItem;

import React from 'react';
import { Text, View, TouchableOpacity, useColorScheme } from 'react-native';
import dynamicStyles from './styles';
import { ArrowRightIcon } from '../../SvgComponents';

function MenuListItem({ modifiedIcon, onPress, icon, children, noArrow }) {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.list}>
      <View style={styles.listContent}>
        <View style={[styles.iconContainer, modifiedIcon && styles.iconContainerModified]}>{icon}</View>
        <Text style={styles.listText}>{children}</Text>
        {!noArrow && <ArrowRightIcon size={23} />}
      </View>
    </TouchableOpacity>
  );
}

export default MenuListItem;

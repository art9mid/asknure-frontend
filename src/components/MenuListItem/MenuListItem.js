import React from 'react';
import { Image, Text, View, TouchableOpacity, useColorScheme } from 'react-native';
import dynamicStyles from './styles';

function MenuListItem({
  modifiedIcon,
  onPress,
  icon,
  children,
}) {
  const colorScheme = useColorScheme();
  const componentStyles = dynamicStyles(colorScheme);

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={componentStyles.list}>
      <View style={componentStyles.listContent}>
        <View style={[componentStyles.iconContainer, modifiedIcon && componentStyles.iconContainerModified]}>
          {icon}
        </View>
        <Text style={componentStyles.listText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default MenuListItem;

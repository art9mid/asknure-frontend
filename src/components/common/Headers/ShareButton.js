import React from 'react';
import { Pressable, View, Share, TouchableOpacity, useColorScheme } from 'react-native';
import dynamicStyles from './styles';
import AppStyles from '../../../AppStyles';
import WishlistIcon from '../../../SvgIconComponents/WishlistIcon';
import ShareIcon from '../../../SvgIconComponents/ShareIcon';

export const HeaderProductButtons = ({ inWishlist = false, onPressWishlist, tender }) => {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(AppStyles, colorScheme);

  const onPressLink = () => {
    const title = tender?.text?.length <= 120 ? tender?.text : tender?.text?.trim(0, 120) + '...';
    return Share.share({ message: tender.absolute_url });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressWishlist} style={styles.iconContainer}>
        <WishlistIcon size={22} inWishlist={inWishlist} />
      </TouchableOpacity>
      <Pressable onPress={onPressLink} style={styles.iconContainer}>
        <ShareIcon size={25} color={AppStyles.colorSet[colorScheme].mainTextColor} />
      </Pressable>
    </View>
  );
};

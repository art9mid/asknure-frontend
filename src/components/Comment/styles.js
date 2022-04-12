import { StyleSheet } from 'react-native';
import AppStyles, { colorSet } from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  return new StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: 8,
    },
    avatar: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
    },
    content: {
      marginLeft: 10,
      flex: 1,
    },
    text: {
      fontSize: 14,
      lineHeight: 17,
      fontWeight: '400',
      color: colorSet[colorScheme].blackTextColor,
    },
    author: {
      fontSize: 16,
      fontWeight: '700',
      marginBottom: 8,
      color: colorSet[colorScheme].blackTextColor,
    },
    createdAt: {
      fontSize: 14,
      fontWeight: '400',
      marginTop: 3,
      color: colorSet[colorScheme].blackSubTextColor,
    },
    userContainer: {
      width: 45,
      height: 44,
      borderRadius: 22,
      justifyContent: 'center',
      backgroundColor: AppStyles.colorSet[colorScheme].grey3,
      alignItems: 'center',
      overflow: 'hidden',
    },
  });
};

export default dynamicStyles;

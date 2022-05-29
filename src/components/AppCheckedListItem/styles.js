import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  return new StyleSheet.create({
    listContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    listIcon: {
      width: 22,
      height: 22,
      resizeMode: 'contain',
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 45,
      height: 45,
      marginRight: 12,
      borderRadius: 10,
    },
    listText: {
      fontSize: 17,
      color: AppStyles.colorSet[colorScheme].blackTextColor,
      paddingRight: 20,
    },
    listBigIcon: {
      width: 45,
      height: 45,
      borderRadius: 45,
    },
    list: {
      minHeight: 62,
      width: '100%',
      paddingVertical: 9,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: AppStyles.colorSet[colorScheme].grey1,
    },
    rightContent: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10
    },
  });
};

export default dynamicStyles;

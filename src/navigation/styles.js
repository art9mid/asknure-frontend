import { StyleSheet } from 'react-native';
import AppStyles from '../AppStyles';

const dynamicStyles = (colorScheme) => {
  return new StyleSheet.create({
    plusItemContainer: {
      backgroundColor: AppStyles.colorSet[colorScheme].white,
      height: 40,
      width: 65,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: AppStyles.colorSet[colorScheme].white,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    plusItemText: {
      fontWeight: '700',
      fontSize: 25,
      paddingBottom: 3,
      color: AppStyles.colorSet[colorScheme].tabBarColor,
    },
  });
};

export default dynamicStyles;

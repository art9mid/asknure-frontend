import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  return new StyleSheet.create({
    tabBarContainer: {
      flexDirection: 'row',
      backgroundColor: AppStyles.colorSet[colorScheme].tabBarColor,
      height: 60,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      margin: 10,
      borderRadius: 10,
    },
    iconWrapper: {
      height: 80,
      justifyContent: 'center',
    },
    itemContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
  });
};

export default dynamicStyles;

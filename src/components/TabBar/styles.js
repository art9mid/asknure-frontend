import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];
  return new StyleSheet.create({
    tabBarContainer: {
      backgroundColor: colorSet.whiteBackgroundColor,
    },
    tabBarWrapper: {
      height: 60,
      margin: 10,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      borderRadius: 10,
      flexDirection: 'row',
      backgroundColor: colorSet.tabBarColor,
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

import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];
  return new StyleSheet.create({
    tabBarContainer: {
      backgroundColor: colorSet.whiteBackgroundColor,
    },
    tabBarWrapper: {
      borderTopWidth: 1,
      borderTopColor: colorSet.grey3,
      height: 60,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
    activeTabIndicatorContainer: {
      position: 'absolute',
      top: 0,
      alignItems: 'center',
      zIndex: 2,
    },
    activeTabIndicator: {
      width: 70,
      height: 3,
      backgroundColor: colorSet.activeIconColor,
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
    },
    iconWrapper: {
      position: 'relative',
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabBarText: {
      fontSize: 12,
      color: colorSet.textColor,
      marginTop: 3,
    },
    tabBarTextActive: {
      color: colorSet.activeIconColor,
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

import { StyleSheet } from 'react-native';
import AppStyles from '../AppStyles';

const dynamicStyles = (colorScheme) => {
  const styles = AppStyles.colorSet[colorScheme];
  return new StyleSheet.create({
    plusItemContainer: {
      backgroundColor: styles.white,
      height: 40,
      width: 65,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: styles.white,
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
      color: styles.tabBarColor,
    },
    headerStyle: {
      height: 100,
      borderBottomWidth: 1,
      borderBottomColor: styles.grey3,
      shadowColor: 'transparent',
      shadowOpacity: 0,
      // backgroundColor: styles.mainThemeColor,
      elevation: 0,
    },
  });
};

export default dynamicStyles;

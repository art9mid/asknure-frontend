import { Dimensions, StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const styles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];

  return StyleSheet.create({
    container: {
      height: '100%',
      paddingVertical: 15,
      backgroundColor: colorSet.mainThemeBackgroundColor,
    },
    category: {
      flex: 1,
      borderWidth: 2,
      borderColor: colorSet.blue,
      paddingVertical: 10,
      paddingHorizontal: 15,
      paddingRight: 35,
      margin: 5,
      borderRadius: 5,
      background: colorSet.whiteBackgroundColor,
      flexDirection: 'row',
      alignItems: 'center',
    },
    categoryText: {
      fontWeight: '700',
      color: colorSet.textColor,
    },
    categoryActiveText: {
      color: colorSet.whiteText,
    },
    categoryActive: {
      borderColor: colorSet.blue,
      backgroundColor: colorSet.blue,
    },
    categoryPlus: {
      position: 'absolute',
      color: colorSet.blue,
      marginLeft: 20,
      fontSize: 18,
      top: 6,
      right: 15,
    },
    bottomContainer: {
      backgroundColor: colorSet.grey3,
      paddingHorizontal: 20,
      paddingVertical: 40,
      marginHorizontal: -10,
      marginTop: 10,
    },
    bottomTitle: {
      textAlign: 'center',
      fontSize: 17,
      fontWeight: '700',
      color: colorSet.textColor,
      marginBottom: 5,
    },
    bottomText: {
      textAlign: 'center',
      fontSize: 15,
      color: colorSet.blackSubTextColor,
      marginBottom: 20,
    },
    categoryActivePlus: {
      color: colorSet.whiteText,
    },
    searchContainer: {
      paddingBottom: 10,
      paddingTop: 10,
      paddingHorizontal: 5,
    },
    buttonContainer: {
      padding: 15,
    },
    tabs: {
      flexDirection: 'row',
      padding: 15,
      marginBottom: 5,
    },
    tabText: {
      color: colorSet.textColor,
      fontSize: 14,
    },
    tabTextActive: {
      fontWeight: '700',
    },
    activeTabIndicatorContainer: {
      position: 'absolute',
      bottom: 0,
      left: 15,
      alignItems: 'center',
      zIndex: 2,
    },
    activeTabIndicator: {
      width: (Dimensions.get('screen').width / 2) - 30,
      height: 3,
      backgroundColor: colorSet.activeIconColor,
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
    },
    tab: {
      position: 'relative',
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default styles;

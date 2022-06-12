import { Dimensions, StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const styles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];

  return StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: colorSet.whiteBackgroundColor,
    },
    activeCategories: {
      paddingHorizontal: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    tapeContainerActive: {
      height: 45,
      width: 45,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colorSet.grey1,
      backgroundColor: colorSet.grey3,
    },
    tabsContainer: {
      flexDirection: 'row',
    },
    tabWrapper: {
      paddingVertical: 15,
    },
    tabActive: {
      backgroundColor: colorSet.blue,
    },
    tabText: {
      color: colorSet.blue,
      fontSize: 14,
    },
    tabTextActive: {
      color: colorSet.whiteText,
    },
    tab: {
      borderColor: colorSet.blue,
      borderWidth: 1,
      borderRadius: 5,
      marginRight: 5,
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    tapeContainer: {
      minHeight: 55,
      paddingHorizontal: 20,
      borderRadius: 10,
      margin: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colorSet.grey1,
      backgroundColor: colorSet.grey3,
    },
    tapeText: {
      fontSize: 17,
      fontWeight: '700',
      color: colorSet.textColor,
      maxWidth: '90%',
    },
    slideContainer: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    },
    slideInfo: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    slideTitle: {
      paddingHorizontal: 20,
      fontSize: 20,
      color: AppStyles.colorSet[colorScheme].white,
      fontWeight: '700',
      marginBottom: 20,
      textAlign: 'center',
    },
    slideSubText: {
      paddingHorizontal: 20,
      color: AppStyles.colorSet[colorScheme].white,
      fontSize: 15,
      textAlign: 'left',
    },
    slideImage: {
      width: '100%',
      height: Dimensions.get('window').height * 0.25,
      resizeMode: 'cover',
    },
    slideInfoShadow: {
      backgroundColor: 'rgba(0,0,0,0.60)',
    },
    chairItemContainer: {
      paddingVertical: 8,
      paddingHorizontal: 20,
      backgroundColor: colorSet.grey1,
      marginVertical: 20,
      marginHorizontal: 5,
      borderRadius: 5,
    },
    chairItemText: {
      fontSize: 14,
      color: colorSet.textColor,
    },
    containerList: {
      paddingHorizontal: 15,
    },
    chairContainer: {
      borderBottomWidth: 1,
      borderBottomColor: colorSet.grey3,
      paddingHorizontal: 5,
      backgroundColor: colorSet.whiteBackgroundColor,
    },
  });
};

export default styles;

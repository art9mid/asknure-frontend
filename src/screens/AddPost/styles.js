import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const styles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];

  return StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: colorSet.whiteBackgroundColor,
      paddingHorizontal: 15,
      paddingTop: 15,
      paddingBottom: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: colorSet.textColor,
    },
    modalTitle: {
      paddingTop: 20,
      fontSize: 23,
      fontWeight: '700',
      color: colorSet.textColor,
      textAlign: 'center',
    },
    modalDescription: {
      paddingTop: 5,
      fontSize: 16,
      textAlign: 'center',
      color: colorSet.textColor,
      marginVertical: 10,
    },
    modalFooter: {
      paddingTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    modalBack: {
      padding: 10,
    },
    modalBackText: {
      fontSize: 16,
      color: colorSet.errorMessage,
      fontWeight: '500',
    },
    subtitle: {
      fontSize: 16,
      fontWeight: '700',
      color: colorSet.textColor,
      marginVertical: 10,
    },
    category: {
      paddingVertical: 10,
      paddingLeft: 15,
      paddingRight: 45,
      borderWidth: 1,
      borderColor: colorSet.grey1,
      borderRadius: 50,
      marginRight: 10,
    },
    categoryActive: {
      borderColor: colorSet.blue,
      backgroundColor: colorSet.blue,
    },
    categoryWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 5,
      position: 'relative',
    },
    categoryText: {
      fontWeight: '700',
      color: colorSet.textColor,
    },
    categoryActiveText: {
      color: colorSet.whiteText,
    },
    categoryPlus: {
      position: 'absolute',
      color: colorSet.blue,
      marginLeft: 20,
      fontSize: 18,
      top: 6,
      right: 15,
    },
    categoryActivePlus: {
      color: colorSet.whiteText,
    },
    categoryWrapperOther: {
      paddingRight: 15,
      backgroundColor: colorSet.grey1,
      borderColor: colorSet.grey1,
    },
    selectedCategoriesText: {
      marginVertical: 10,
      fontSize: 13,
      fontWeight: '500',
      color: colorSet.blackSubTextColor,
    },
  });
};

export default styles;

import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  return new StyleSheet.create({
    container: {
      padding: 10,
      paddingHorizontal: 0,
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
      borderLeftWidth: 5,
      borderRadius: 5,
      marginVertical: 5,
      borderWidth: 1,
      borderLeftColor: AppStyles.colorSet[colorScheme].blue,
      borderTopColor: AppStyles.colorSet[colorScheme].grey3,
      borderBottomColor: AppStyles.colorSet[colorScheme].grey3,
      borderRightColor: AppStyles.colorSet[colorScheme].grey3,
    },
    userContainer: {
      width: 45,
      height: 44,
      borderRadius: 22,
      justifyContent: 'center',
      backgroundColor: AppStyles.colorSet[colorScheme].grey3,
      alignItems: 'center',
      marginRight: 15,
      marginLeft: 10,
    },
    info: {
      flex: 1,
      paddingVertical: 15,
    },
    title: {
      color: AppStyles.colorSet[colorScheme].blackTextColor,
      fontWeight: '700',
      fontSize: 16,
      paddingBottom: 5,
      width: '90%',
    },
    date: {
      color: AppStyles.colorSet[colorScheme].blackSubTextColor,
      fontSize: 14,
    },
    rightIcon: {
      width: 9,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    answers: {
      position: 'absolute',
      top: -5,
      right: -5,
      fontSize: 12,
      color: AppStyles.colorSet[colorScheme].blackSubTextColor,
    },
  });
};

export default dynamicStyles;

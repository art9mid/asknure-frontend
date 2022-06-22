import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];

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
      backgroundColor: colorSet.whiteBackgroundColor,
      borderLeftColor: colorSet.blue,
      borderTopColor: colorSet.grey3,
      borderBottomColor: colorSet.grey3,
      borderRightColor: colorSet.grey3,
    },
    userAvatar: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      borderRadius: 100,
    },
    userContainer: {
      width: 50,
      height: 50,
      borderRadius: 100,
      justifyContent: 'center',
      backgroundColor: colorSet.grey3,
      alignItems: 'center',
      marginRight: 15,
      marginLeft: 10,
    },
    info: {
      flex: 1,
      paddingVertical: 15,
    },
    title: {
      color: colorSet.blackTextColor,
      fontWeight: '700',
      fontSize: 16,
      paddingBottom: 3,
      width: '90%',
    },
    date: {
      color: colorSet.blackSubTextColor,
      fontSize: 12,
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
      color: colorSet.blackSubTextColor,
    },
    category: {
      width: '90%',
      color: colorSet.blue,
      fontWeight: '700',
      fontSize: 12,
    },
    qaContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginVertical: 5,
    },
    button: {
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button1: {
      backgroundColor: colorSet.blue,
    },
    button2: {
      backgroundColor: colorSet.errorMessage,
      borderBottomRightRadius: 5,
      borderTopRightRadius: 5,
    },
    buttonText: {
      fontWeight: 'bold',
    },
    button1Text: {
      color: colorSet.whiteText,
    },
    button2Text: {
      color: colorSet.whiteText,
    },
    contentContainerStyle: {
      flexGrow: 1,
      backgroundColor: colorSet.whiteBackgroundColor,
    },
  });
};

export default dynamicStyles;

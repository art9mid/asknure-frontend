import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];

  return new StyleSheet.create({
    qaContainer: {
      flexDirection: 'row',
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

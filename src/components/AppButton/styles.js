import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  const baseButton = {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 55,
  };

  return StyleSheet.create({
    btn: {
      ...baseButton,
      backgroundColor: AppStyles.colorSet[colorScheme].mainThemeColor,
    },
    btnDisabled: {
      ...baseButton,
      backgroundColor: AppStyles.colorSet[colorScheme].grey3,
    },
    btnSecondary: {
      ...baseButton,
      color: AppStyles.colorSet[colorScheme].whiteText,
      backgroundColor: AppStyles.colorSet[colorScheme].grey2,
    },
    btnDisabledSecondary: {
      borderWidth: 1,
      color: AppStyles.colorSet[colorScheme].textColor,
      borderColor: AppStyles.colorSet[colorScheme].mainThemeColor,
    },
    btnIcon: {
      width: 26,
      height: 26,
      resizeMode: 'contain',
      marginRight: 8,
    },
    text: {
      fontSize: 16,
      color: AppStyles.colorSet[colorScheme].whiteText,
    },
    textSecondary: {
      fontSize: 16,
      color: AppStyles.colorSet[colorScheme].textColor,
    },
  });
};

export default dynamicStyles;

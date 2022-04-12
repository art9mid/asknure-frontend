import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  const baseButton = {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 55,
  };

  return StyleSheet.create({
    btn: {
      ...baseButton,
      backgroundColor: AppStyles.colorSet[colorScheme].mainThemeColor,
    },
    btnDisabled: {
      opacity: 0.7,
    },
    btnSecondary: {
      ...baseButton,
      color: AppStyles.colorSet[colorScheme].whiteText,
      backgroundColor: AppStyles.colorSet[colorScheme].whiteBackgroundColor,
      borderWidth: 1,
      borderColor: AppStyles.colorSet[colorScheme].mainThemeColor,
    },
    btnDisabledSecondary: {
      opacity: 0.7,

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
      fontWeight: '500',
    },
    textSecondary: {
      fontSize: 16,
      color: AppStyles.colorSet[colorScheme].textColor,
    },
  });
};

export default dynamicStyles;

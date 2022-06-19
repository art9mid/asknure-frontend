import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];

  return new StyleSheet.create({
    input: {
      lineHeight: 20,
      marginVertical: 10,
      borderWidth: 1,
      borderColor: colorSet.grey3,
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingTop: 10,
      paddingBottom: 10,
      height: 55,
      fontSize: 15,
      color: colorSet.textColor,
      backgroundColor: colorSet.mainThemeBackgroundColor
    },
    inputError: {
      borderColor: colorSet.errorMessage,
    },
  });
};

export default dynamicStyles;

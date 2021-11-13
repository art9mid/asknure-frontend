import { ColorSchemeName, StyleProp, StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme: ColorSchemeName) => {
  const colorSet = AppStyles.colorSet[colorScheme];

  return new StyleSheet.create({
    input: {
      marginVertical: 10,
      borderWidth: 1,
      borderColor: colorSet.grey3,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 15,
      maxHeight: 200,
      textAlignVertical: 'top',
      fontSize: 14,
      color: colorSet.textColor,
    },
  });
};

export default dynamicStyles;

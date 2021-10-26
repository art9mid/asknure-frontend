import { ColorSchemeName, StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const styles = (colorScheme: ColorSchemeName) => {
  const colorSet = AppStyles.colorSet[colorScheme];

  return StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: colorSet.whiteBackgroundColor,
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
      color: colorSet.textColor
    }
  });
};

export default styles;

import { Dimensions, StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const styles = (colorScheme) => {
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
      color: colorSet.textColor,
    },
    containerList: {
      paddingHorizontal: 10,
    },
    chairContainer: {
      paddingHorizontal: 5,
    },
  });
};

export default styles;

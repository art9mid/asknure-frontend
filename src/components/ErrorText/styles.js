import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  return StyleSheet.create({
    error: {
      fontSize: 14,
      color: AppStyles.colorSet[colorScheme].errorMessage,
      marginBottom: 10,
    },
  });
};

export default dynamicStyles;

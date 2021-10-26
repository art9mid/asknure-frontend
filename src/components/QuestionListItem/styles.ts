import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];
  return new StyleSheet.create({});
};

export default dynamicStyles;

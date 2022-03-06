import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const styles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorSet.whiteBackgroundColor,
      padding: 15,
    },
  });
};

export default styles;

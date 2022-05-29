import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const styles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];

  return StyleSheet.create({
    container: {
      height: '100%',
      paddingHorizontal: 15,
      backgroundColor: colorSet.mainThemeBackgroundColor,
    },
  });
};

export default styles;

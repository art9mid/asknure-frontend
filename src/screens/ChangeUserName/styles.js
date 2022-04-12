import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const styles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];

  return StyleSheet.create({
    container: {
      height: '100%',
      padding: 15,
      backgroundColor: colorSet.mainThemeBackgroundColor,
    },
    text: {
      marginBottom: 20,
      fontSize: 12,
      color: colorSet.blackSubTextColor,
    },
  });
};

export default styles;

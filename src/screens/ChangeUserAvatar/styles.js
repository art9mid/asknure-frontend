import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const styles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];

  return StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: colorSet.mainThemeBackgroundColor,
    },
    item: {
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 80,
      height: 80,
      resizeMode: 'contain',
    },
    itemPressed: {
      padding: 15,
    },
  });
};

export default styles;

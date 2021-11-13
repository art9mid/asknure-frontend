import { ColorSchemeName, StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const styles = (colorScheme: ColorSchemeName) => {
  const colorSet = AppStyles.colorSet[colorScheme];

  return StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: colorSet.whiteBackgroundColor,
      justifyContent: 'space-between',
      padding: 15,
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: colorSet.textColor,
    },
    subtitle: {
      fontSize: 16,
      fontWeight: '700',
      color: colorSet.textColor,
      marginVertical: 10,
    },
    switchSelector: {
      borderColor: AppStyles.colorSet[colorScheme].grey1,
      borderRadius: 10,
      borderWidth: 1,
    },
  });
};

export default styles;

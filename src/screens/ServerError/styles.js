import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const styles = (colorScheme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: AppStyles.colorSet[colorScheme].mainThemeBackgroundColor,
      height: '100%',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 21,
      fontWeight: '700',
      textAlign: 'center',
      maxWidth: 280,
      color: AppStyles.colorSet[colorScheme].textColor,
      marginTop: 30,
      marginBottom: 20,
    },
    text: {
      fontSize: 16,
      maxWidth: 280,
      textAlign: 'center',
      color: AppStyles.colorSet[colorScheme].blackSubTextColor,
    },
  });
};

export default styles;

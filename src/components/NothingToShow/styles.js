import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  return new StyleSheet.create({
    container: {
      paddingBottom: 60,
      padding: 20,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: AppStyles.colorSet[colorScheme].white,
    },
    contentContainer: {
      marginTop: 40,
    },
    title: {
      fontSize: 26,
      fontWeight: '700',
      color: AppStyles.colorSet[colorScheme].textColor,
      maxWidth: 280,
      textAlign: 'center',
    },
    footer: {
      padding: 20,
    },
  });
};

export default dynamicStyles;

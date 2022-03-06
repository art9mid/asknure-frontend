import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      zIndex: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: AppStyles.colorSet[colorScheme].whiteBackgroundColor,
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
    },
    text: {
      fontSize: 16,
      fontWeight: '700',
      marginTop: 20,
      maxWidth: '70%',
      textAlign: 'center',
    },
  });
};

export default dynamicStyles;

import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  return StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: 'rgba(19,24,32,.8)',
      justifyContent: 'flex-end',
    },
    wrapper: {
      borderRadius: 10,
      padding: 20,
      marginHorizontal: 20,
      marginVertical: 40,
      backgroundColor: AppStyles.colorSet[colorScheme].whiteText,
    },
  });
};

export default dynamicStyles;

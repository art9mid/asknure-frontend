import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: AppStyles.colorSet[colorScheme].grey3,
      alignItems: 'center',
      height: 40,
      borderRadius: 6,
    },
    searchContainer: {
      paddingHorizontal: 12,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      width: 16,
      height: 16,
      resizeMode: 'contain',
    },
    input: {
      flex: 1,
      fontSize: 15,
    },
  });
};

export default dynamicStyles;

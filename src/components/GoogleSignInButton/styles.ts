import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  return StyleSheet.create({
    googleBtn: {
      height: 45,
      backgroundColor: AppStyles.colorSet[colorScheme].grey7,
      borderRadius: 10,
      minWidth: 130,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 5,
    },
    text: {
      paddingTop: 2,
      justifyContent: 'center',
      fontWeight: '700',
      fontSize: 15,
      paddingLeft: 20,
    },
  });
};

export default dynamicStyles;

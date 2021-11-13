import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  return StyleSheet.create({
    titleContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      marginVertical: 15,
    },
    title: {
      color: AppStyles.colorSet[colorScheme].textColor,
      fontSize: 17,
      fontWeight: '700',
      paddingRight: 10,
    },
    titleLine: {
      marginTop: 3,
      height: 1,
      flex: 1,
      backgroundColor: AppStyles.colorSet[colorScheme].grey3,
    },
  });
};

export default dynamicStyles;

import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];

  return StyleSheet.create({
    modalTitle: {
      paddingTop: 20,
      fontSize: 23,
      fontWeight: '700',
      color: colorSet.textColor,
      textAlign: 'center',
    },
    modalDescription: {
      paddingTop: 5,
      fontSize: 16,
      textAlign: 'center',
      color: colorSet.textColor,
      marginVertical: 10,
    },
    modalFooter: {
      paddingTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    modalBack: {
      padding: 10,
    },
    modalBackText: {
      fontSize: 16,
      color: colorSet.errorMessage,
      fontWeight: '500',
    },
  });
};

export default dynamicStyles;

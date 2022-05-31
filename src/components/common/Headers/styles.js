import { StyleSheet } from 'react-native';
import AppStyles from '../../../AppStyles';

const dynamicStyles = (colorScheme) => {
  const styles = AppStyles.colorSet[colorScheme];
  return StyleSheet.create({
    container: {
      height: '100%',
      paddingLeft: 20,
      justifyContent: 'center',
    },
    text: {
      fontSize: 23,
      fontWeight: '700',
      color: styles.blue,
    },
    pageHeaderTitle: {
      textAlign: 'center',
      fontSize: 17,
      fontWeight: '700',
      color: styles.textColor,
    },
    iconContainer: {
      padding: 8,
      borderRadius: 50,
    },
    shareContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: '100%',
      paddingHorizontal: 12,
    },
  });
};

export default dynamicStyles;

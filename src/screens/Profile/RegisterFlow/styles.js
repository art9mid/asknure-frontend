import { Dimensions, StyleSheet } from 'react-native';
import AppStyles from '../../../AppStyles';

const styles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];

  return StyleSheet.create({
    container: {
      paddingVertical: 10,
      flex: 1,
      backgroundColor: colorSet.whiteBackgroundColor,
    },
    image: {
      width: '100%',
      height: Dimensions.get('window').height / 3,
      resizeMode: 'cover',
    },
    title: {
      fontSize: 24,
      maxWidth: 300,
      textAlign: 'center',
      fontWeight: '700',
      color: colorSet.blackTextColor,
      marginVertical: 20,
    },
    subtitle: {
      color: colorSet.blackSubTextColor,
      textAlign: 'center',
      fontSize: 16,
      marginBottom: 20,
    },
  });
};

export default styles;

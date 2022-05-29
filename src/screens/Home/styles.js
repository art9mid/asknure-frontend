import { Dimensions, StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const styles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];

  return StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: colorSet.whiteBackgroundColor,
    },
    carouselContainer: {
      height: 450,
    },
    slideContainer: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    },
    slideInfo: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slideTitle: {
      maxWidth: '80%',
      fontSize: 20,
      color: AppStyles.colorSet[colorScheme].white,
      fontWeight: '700',
      marginBottom: 20,
      textAlign: 'center',
    },
    slideSubText: {
      maxWidth: '80%',
      color: AppStyles.colorSet[colorScheme].white,
      fontSize: 14,
      textAlign: 'center',
    },
    slideImage: {
      width: '100%',
      height: Dimensions.get('window').height * 0.33,
    },
    chairItemContainer: {
      paddingVertical: 8,
      paddingHorizontal: 20,
      backgroundColor: colorSet.grey1,
      marginVertical: 20,
      marginHorizontal: 5,
      borderRadius: 5,
    },
    chairItemText: {
      fontSize: 14,
      color: colorSet.textColor,
    },
    containerList: {
      paddingHorizontal: 15,
    },
    chairContainer: {
      paddingHorizontal: 5,
    },
  });
};

export default styles;

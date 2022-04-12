import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  const icon = {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  };

  const iconContainer = {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    marginRight: 12,
    backgroundColor: AppStyles.colorSet[colorScheme].pink,
    borderRadius: 10,
  };

  return new StyleSheet.create({
    listContent: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    listIcon: {
      ...icon,
      tintColor: AppStyles.colorSet[colorScheme].mainTextColor,
    },
    iconContainer: {
      ...iconContainer,
    },
    iconContainerModified: {
      ...iconContainer,
      backgroundColor: 'transparent',
    },
    listText: {
      fontSize: 17,
      color: AppStyles.colorSet[colorScheme].mainTextColor,
      paddingRight: 20,
      flex: 1,
    },
    list: {
      minHeight: 62,
      width: '100%',
      paddingVertical: 9,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: AppStyles.colorSet[colorScheme].grey1,
    },
    rightContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
};

export default dynamicStyles;

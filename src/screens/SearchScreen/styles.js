import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const styles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];

  return StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: colorSet.whiteBackgroundColor,
    },
    searchWrapper: {
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 10,
    },
    input: {
      flex: 1,
    },
    searchCloseText: {
      fontSize: 17,
      color: AppStyles.colorSet[colorScheme].grey4,
      paddingLeft: 12,
    },
    searchCloseContainer: {
      height: '100%',
      justifyContent: 'center',
    },
    box: {
      width: 60,
      height: 60,
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 15,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    boxText: {
      padding: 5,
      fontSize: 23,
      color: AppStyles.colorSet[colorScheme].blackTextColor,
    },
    emptySearchText: {
      fontSize: 16,
      maxWidth: '80%',
      color: AppStyles.colorSet[colorScheme].blackTextColor,
    },
    emptyContainer: {
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
  });
};

export default styles;

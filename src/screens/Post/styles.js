import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const styles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorSet.whiteBackgroundColor,
    },
    tenderHeaderContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: AppStyles.colorSet[colorScheme].grey3,
      paddingVertical: 15,
      paddingHorizontal: 15,
    },
    userText: {
      maxWidth: '100%',
      fontSize: 15,
      color: AppStyles.colorSet[colorScheme].blackSubTextColor,
    },
    body: {
      padding: 15,
    },
    text: {
      fontSize: 18,
      color: AppStyles.colorSet[colorScheme].blackTextColor,
    },
    title: {
      fontSize: 17,
      fontWeight: '700',
      marginTop: 20,
      color: AppStyles.colorSet[colorScheme].blackTextColor,
    },
    answersContainer: {
      paddingTop: 10,
    },
    sendButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: -17,
      backgroundColor: colorSet.mainThemeBackgroundColor,
      borderColor: colorSet.grey3,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderTopWidth: 0,
    },
    sendButton: {
      backgroundColor: colorSet.mainThemeColor,
      flexDirection: 'row',
      alignItems: 'center',
      height: '100%',
      paddingHorizontal: 30,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 10,
    },
    counter: {
      color: colorSet.blackSubTextColor,
      paddingHorizontal: 10,
    },
  });
};

export default styles;

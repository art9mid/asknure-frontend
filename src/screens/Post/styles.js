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
      borderBottomColor: colorSet.grey3,
      paddingVertical: 15,
      paddingHorizontal: 15,
    },
    userText: {
      maxWidth: '100%',
      fontSize: 15,
      color: colorSet.blackSubTextColor,
    },
    body: {
      padding: 15,
    },
    postTitle: {
      fontSize: 18,
      fontWeight: '700',
      paddingBottom: 5,
      color: colorSet.blackTextColor,
    },
    text: {
      fontSize: 16,
      color: colorSet.blackTextColor,
    },
    categories: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingTop: 15,
    },
    categoryNameContainer: {
      width: 'auto',
      backgroundColor: colorSet.pink,
      marginRight: 4,
      marginBottom: 4,
      paddingVertical: 6,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    categoryName: {
      fontSize: 13,
      color: colorSet.textColor,
    },
    title: {
      fontSize: 17,
      fontWeight: '700',
      marginTop: 20,
      color: colorSet.blackTextColor,
    },
    answersContainer: {
      paddingTop: 10,
    },
    sendButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: -50,
      height: 50,
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

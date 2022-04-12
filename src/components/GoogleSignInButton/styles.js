import { StyleSheet } from 'react-native';

const dynamicStyles = (colorScheme) => {
  return StyleSheet.create({
    googleBtn: {
      padding: 2,
      backgroundColor: '#4588f1',
      borderRadius: 3,
      minWidth: 130,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 5,
    },
    googleIcon: {
      backgroundColor: '#fff',
      padding: 10,
    },
    text: {
      paddingTop: 2,
      justifyContent: 'center',
      fontWeight: '700',
      fontSize: 17,
      paddingHorizontal: 20,
      color: '#fff',
    },
  });
};

export default dynamicStyles;

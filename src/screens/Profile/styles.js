import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const styles = (colorScheme) => {
  const colorSet = AppStyles.colorSet[colorScheme];

  return StyleSheet.create({
    container: {
      padding: 15,
      flex: 1,
      backgroundColor: colorSet.whiteBackgroundColor,
    },
    cardContainer: {
      backgroundColor: '#1e1f21',
      borderRadius: 10,
      position: 'relative',
      minHeight: 150,
      overflow: 'hidden',
    },
    foregroundImage: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      resizeMode: 'cover',
      zIndex: 1,
    },
    content: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(19,24,32,.6)',
      zIndex: 2,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
    },
    userAvatarContainer: {
      width: 55,
      height: 55,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: '#fff',
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    userAvatar: {
      width: 55,
      height: 55,
      resizeMode: 'contain',
    },
    userInfo: {
      paddingLeft: 10,
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    username: {
      maxWidth: '90%',
      fontSize: 20,
      fontWeight: '700',
      color: colorSet.whiteText,
    },
    email: {
      fontSize: 14,
      paddingTop: 3,
      color: colorSet.whiteText,
    },
    editProfile: {
      padding: 15,
      marginRight: -15,
    },
  });
};

export default styles;

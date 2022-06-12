import { StyleSheet } from 'react-native';
import AppStyles from '../../AppStyles';

const dynamicStyles = (colorScheme) => {
  const styles = AppStyles.colorSet[colorScheme];
  const item = {
    justifyContent: 'space-between',
    width: 110,
    height: 110,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: styles.grey3,
    position: 'relative',
  };

  return StyleSheet.create({
    pickFile: {
      ...item,
      marginRight: 5,
      padding: 8,
    },
    pickFileImage: {
      ...item,
      marginRight: 5,
    },
    pickFileButton: {
      padding: 8,
      ...item,
    },
    text: {
      fontSize: 14,
      color: styles.textColor,
      fontWeight: '700',
    },
    image: {
      resizeMode: 'cover',
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
    removeButton: {
      position: 'absolute',
      top: 0,
      right: 0,
      paddingTop: 8,
      paddingRight: 8,
      paddingBottom: 12,
      paddingLeft: 12,
    },
  });
};

export default dynamicStyles;

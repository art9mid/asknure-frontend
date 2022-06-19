import React, { useContext } from 'react';
import { Text, Pressable, View, useColorScheme } from 'react-native';
import dynamicStyles from './styles';
import { AppBtn, AppModal } from '../index';
import { useNavigation } from '@react-navigation/native';
import { LocalizationContext } from '../../localization';

const AuthModal = ({ visible, setVisible }) => {
  const { t } = useContext(LocalizationContext);

  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  const handleBack = () => {
    navigation.goBack();
    setVisible(!visible);
  };

  const handleCreateUser = () => {
    navigation.navigate('Profile');
    setVisible(!visible);
  };

  return (
    <AppModal visible={!visible}>
      <Text style={styles.modalTitle}>{t('You are not authorized')}</Text>
      <Text style={styles.modalDescription}>
        {t('Create an account to access all ASKNURE features')}
      </Text>
      <View style={styles.modalFooter}>
        <Pressable style={styles.modalBack} onPress={handleBack}>
          <Text style={styles.modalBackText}>
            {t('Back')}
          </Text>
        </Pressable>
        <AppBtn onPress={handleCreateUser} secondary style={{ button: { height: 45 } }}>
          {t('Create an account')}
        </AppBtn>
      </View>
    </AppModal>
  );
};

export default AuthModal;

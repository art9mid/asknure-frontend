import React from 'react';
import { Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import dynamicStyles from './styles';
import { GoogleIcon } from '../../SvgComponents';
import { showErrorNotification } from '../../utils/toast';

const GoogleSignInButton = ({ onSingIn }) => {
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(colorScheme);

  async function onGoogleSignIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const isSignedIn = await GoogleSignin.isSignedIn();

      console.log('isSignedIn', isSignedIn);

      if (isSignedIn) {
        await GoogleSignin.signOut();
      }
      await GoogleSignin.signIn();
      const response = await GoogleSignin.getTokens();
      console.log(response);
      onSingIn(response);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        return;
      } else if (error.code === statusCodes.IN_PROGRESS) {
        showErrorNotification('Operation (e.g. sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        showErrorNotification('Play services not available or outdated');
      }
    }
  }

  return (
    <TouchableOpacity onPress={onGoogleSignIn} style={styles.googleBtn}>
      <View style={styles.googleIcon}>
        <GoogleIcon />
      </View>
      <Text style={styles.text}>Войти с Google</Text>
    </TouchableOpacity>
  );
};

export default GoogleSignInButton;

import React from 'react';
import { ScrollView, useColorScheme } from 'react-native';
import { GoogleSignInButton } from '../../components/GoogleSignInButton/GoogleSignInButton';
import dynamicStyles from '../Post/styles';

const Profile = () => {
  const colorSchema = useColorScheme();
  const styles = dynamicStyles(colorSchema);
  return (
    <ScrollView style={styles.container}>
      <GoogleSignInButton />
    </ScrollView>
  );
};

export default Profile;

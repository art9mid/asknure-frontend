import React from 'react';
import { ScrollView, Text } from 'react-native';
import { GoogleSignInButton } from '../../components/GoogleSignInButton/GoogleSignInButton';

const Profile = () => {
  return (
    <ScrollView>
      <GoogleSignInButton />
    </ScrollView>
  );
};

export default Profile;

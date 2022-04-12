import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, ScrollView, Text, useColorScheme, View } from 'react-native';
import dynamicStyles from './styles';
import { images } from '../../../AppStyles';
import { userInfoThunk } from '../../../redux/thunks/user';
import { showErrorNotification } from '../../../utils/toast';
import { Loader, GoogleSignInButton } from '../../../components';

const RegisterFlow = () => {
  const dispatch = useDispatch();
  const colorSchema = useColorScheme();
  const styles = dynamicStyles(colorSchema);
  const userLoading = useSelector((state) => state.user.userLoading);

  const handleSingIn = React.useCallback((response) => {
    dispatch(userInfoThunk(response)).then(({ success }) => {
      if (!success) {
        showErrorNotification('Возникла ошибка!', 'Попробуйте войти снова или чуть позже');
      }
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {userLoading && <Loader opacity />}
      <Image source={images.profile} style={styles.image} />
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.title}>Зарегистрируйтесь на asknure</Text>
        <Text style={styles.subtitle}>Задавайте вопросы, получайте ответы. Что интересно студентам ?</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <GoogleSignInButton onSingIn={handleSingIn} />
      </View>
    </ScrollView>
  );
};

export default React.memo(RegisterFlow);

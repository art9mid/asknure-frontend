import React from 'react';
import { Provider } from 'react-redux';
import { GOOGLE_CLIENT_ID } from '@env';
import Toast from 'react-native-toast-message';
import RNBootSplash from 'react-native-bootsplash';
import { PersistGate } from 'redux-persist/integration/react';
import { LogBox, StatusBar, useColorScheme } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import AppStyles from './AppStyles';
import configureStore from './redux/store';
import { toastConfig } from './utils/toast';
import { navigationRef } from './utils/navigation';
import { RootNavigator } from './navigation/RootNavigator';

const { store, persist } = configureStore();

GoogleSignin.configure({
  webClientId: GOOGLE_CLIENT_ID,
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});

const App = () => {
  const colorScheme = useColorScheme();
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: AppStyles.colorSet[colorScheme].mainThemeBackgroundColor,
    },
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NavigationContainer theme={AppTheme} ref={navigationRef} onReady={() => RNBootSplash.hide({ fade: true })}>
            <StatusBar backgroundColor="rgba(255,255,255,0)" translucent animated barStyle={'dark-content'} />
            <RootNavigator />
            <Toast config={toastConfig} />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { GOOGLE_CLIENT_ID } from '@env';
import Toast from 'react-native-toast-message';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { toastConfig } from './utils/toast';
import configureStore from './redux/store';
import { navigationRef } from './utils/navigation';
import { RootNavigator } from './navigation/RootNavigator';
import RNBootSplash from 'react-native-bootsplash';

const { store, persist } = configureStore();

GoogleSignin.configure({
  webClientId: GOOGLE_CLIENT_ID,
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});

const App = () => {
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NavigationContainer ref={navigationRef} onReady={() => RNBootSplash.hide({ fade: true })}>
            <RootNavigator />
            <Toast config={toastConfig} />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { LogBox, YellowBox } from 'react-native';
import { GOOGLE_CLIENT_ID } from '@env';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import configureStore from './redux/store';
import { RootNavigator } from './navigation/RootNavigator';
import { navigationRef } from './utils/navigation';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

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
          <NavigationContainer ref={navigationRef}>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import configureStore from "./redux/store";
import { RootNavigator } from "./navigation/RootNavigator";
import { navigationRef } from './utils/navigation';

const {store, persist} = configureStore();

const App = () => {

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

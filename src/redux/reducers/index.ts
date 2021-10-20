import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

import { combineReducers } from 'redux';
import { app } from './app';

const appPersistConfig = {
  key: 'app',
  storage: AsyncStorage,
  whitelist: [],
};

const appReducer = combineReducers({
  app: persistReducer(appPersistConfig, app),
});

export default appReducer;

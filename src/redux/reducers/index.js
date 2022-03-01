import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { app } from './app';
import { posts } from './posts';
import { errors } from './errors';

const appPersistConfig = {
  key: 'app',
  storage: AsyncStorage,
  whitelist: [],
};

const appReducer = combineReducers({
  app: persistReducer(appPersistConfig, app),
  posts,
  errors,
});

export default appReducer;

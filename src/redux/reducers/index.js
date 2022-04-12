import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { app } from './app';
import { user } from './user';
import { posts } from './posts';
import { errors } from './errors';

const appPersistConfig = {
  key: 'app',
  storage: AsyncStorage,
  whitelist: [],
};
const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const appReducer = combineReducers({
  app: persistReducer(appPersistConfig, app),
  user: persistReducer(userPersistConfig, user),
  posts,
  errors,
});

export default appReducer;

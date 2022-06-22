import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { app } from './app';
import { user } from './user';
import { posts } from './posts';
import { errors } from './errors';
import { categories } from './categories';

const appPersistConfig = {
  key: 'app',
  storage: AsyncStorage,
  whitelist: ['locale', 'fistEnterUserQuestions'],
};

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const categoriesPersistConfig = {
  key: 'categories',
  storage: AsyncStorage,
  whitelist: ['selectedCategories'],
};

const appReducer = combineReducers({
  app: persistReducer(appPersistConfig, app),
  user: persistReducer(userPersistConfig, user),
  posts,
  errors,
  categories: persistReducer(categoriesPersistConfig, categories),
});

export default appReducer;

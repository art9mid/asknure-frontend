import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import appReducer from '../reducers';

const store = createStore(appReducer, applyMiddleware(thunk));
const persist = persistStore(store);

const configureStore = () => {
  return { store, persist };
};

export default configureStore;

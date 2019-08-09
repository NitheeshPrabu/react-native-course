import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import reducers from '../reducers';

const persistedReducer = persistReducer(
  { key: 'root', storage: AsyncStorage, whitelist: ['likedJobs'] },
  reducers
);

const store = createStore(persistedReducer, {}, compose(applyMiddleware(thunk)));
export default () => ({ store, persistor: persistStore(store) });

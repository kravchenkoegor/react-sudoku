import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from 'reducers';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

function configureStore() {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
}

export default configureStore;

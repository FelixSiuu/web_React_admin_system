//  引入redux內部的createStore()，專門用於創建最為核心的store對象
import { createStore } from 'redux'

// 引入總的reducers
import reducers from './reducers/index.js' 

// 引入與redux-persist相關
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'admin-redux',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer);

export const persistor = persistStore(store);
//  導出store 
export default store;
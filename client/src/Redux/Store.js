// import { configureStore } from "@reduxjs/toolkit";
// import Loginreducer from './Loginslice'
// export default configureStore({
//     reducer:{
//         login:Loginreducer
//     }
// })
import { configureStore,combineReducers } from '@reduxjs/toolkit'
import LoginInfo from './Loginslice'
import  ProductInfo from './Productslice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'BinoyExpress2024',
  version: 1,
  storage,
}
const Rootreducer=combineReducers({login:LoginInfo,product:ProductInfo})

const persistedReducer = persistReducer(persistConfig, Rootreducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)


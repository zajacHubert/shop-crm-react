import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query';
import userReducer from './slices/userSlice';
import confirmDialogReducer from './slices/confirmDialogSlice';
import createOrderReducer from './slices/createOrderSlice';
import configReducer from './slices/configSlice';
import popupReducer from './slices/popupSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['user', 'createOrder', 'config'],
};

const rootReducer = combineReducers({
  user: userReducer,
  createOrder: createOrderReducer,
  confirmDialog: confirmDialogReducer,
  config: configReducer,
  popup: popupReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

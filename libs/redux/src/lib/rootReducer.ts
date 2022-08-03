import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import auth from './auth/slice';
import refreshActions from './refreshActions/slice';
import request from './request/slice';
import settings from './settings/slice';
import { persistConfig } from './persistConfig';

const appReducer = combineReducers({
  auth,
  refreshActions,
  request,
  settings,
});

const persistedReducer = persistReducer(persistConfig, appReducer);
export default persistedReducer;

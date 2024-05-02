// store.ts

import {configureStore} from '@reduxjs/toolkit';
import userApiReducer from './userAPI';

const store = configureStore({
  reducer: {
    auth: userApiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

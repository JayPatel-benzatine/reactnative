// store.ts

import {configureStore} from '@reduxjs/toolkit';
import userApiReducer from './userAPI';
import themeSliceReducer from './themeSlice';

const store = configureStore({
  reducer: {
    auth: userApiReducer,
    theme: themeSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

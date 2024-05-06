/* eslint-disable @typescript-eslint/no-unused-vars */
// themeSlice.ts

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Theme} from '../CommanTpyes';

interface ThemeState {
  currentTheme: Theme;
}

export const lightTheme: Theme = {
  colors: {
    primary: '#007bff',
    background: '#ffffff',
    text: '#333333',
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeight: '300',
    fontStyle: 'normal',
  },
};
export const blueTheme: Theme = {
  colors: {
    primary: '#007bff',
    background: '#f0f7ff',
    text: '#000000',
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontStyle: 'italic',
  },
};

export const redTheme: Theme = {
  colors: {
    primary: '#dc3545',
    background: '#fff0f0',
    text: '#000000',
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontStyle: 'normal',
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: '#17a2b8',
    background: '#343a40',
    text: '#ffffff',
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeight: '900',
    fontStyle: 'italic',
  },
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    currentTheme: lightTheme,
  } as ThemeState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.currentTheme = action.payload;
    },
  },
});

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;

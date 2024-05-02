// authSlice.ts
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

interface AuthState {
  isLoading: boolean;
  error: string | null;
  userData: {} | any;
  userToken: string | null;
  screenLoading: boolean;
}

const initialState: AuthState = {
  isLoading: false,
  error: null,
  userData: {},
  userToken: null,
  screenLoading: true,
};

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userData: {email: string; password: string; username: string}) => {
    try {
      const response = await fetch(
        'http://192.168.29.172:8000/api/auth/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        Toast.show({
          type: 'error',
          text1: errorData.message,
          visibilityTime: 2000, // Duration of the toast
        });
        throw new Error(errorData.message);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },
);
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData: {password: string; username: string}) => {
    try {
      const response = await fetch(
        'http://192.168.29.172:8000/api/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        Toast.show({
          type: 'error',
          text1: errorData.message,
          visibilityTime: 2000, // Duration of the toast
        });
        throw new Error(errorData.message);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string | null>) {
      state.userToken = action.payload;
      state.screenLoading = false;
    },
    logout(state, action: PayloadAction<string | null>) {
      state.userToken = action.payload;
      state.screenLoading = false;
    },
    register(state, action: PayloadAction<string | null>) {
      state.userToken = action.payload;
      state.screenLoading = false;
    },
    retriveToken(state, action: PayloadAction<string | null>) {
      state.userToken = action.payload;
      state.screenLoading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signupUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userData = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Signup failed';
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userData = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Signup failed';
      });
  },
});

// Export the async thunk and slice reducer
export const {retriveToken, register, logout, login} = authSlice.actions;
export default authSlice.reducer;

// reducers/loginReducer.ts
import { createSlice } from '@reduxjs/toolkit';

interface LoginState {
  user: any; // Define your user type
  loading: boolean;
  error: any;
}

const initialState: LoginState = {
  user: null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = loginSlice.actions;

export default loginSlice.reducer;

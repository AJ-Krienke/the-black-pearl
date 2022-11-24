import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authentication',

  initialState: {
    isAuthenticated: false,
    loginType: 'customer',
  },

  reducers: {
    login(state) {
      // Redux handles "mutating" state so pure functions aren't necessary
      // I prefer to use them anyway so switching back to React doesn't introduce bugs
      return { ...state, isAuthenticated: true };
    },

    logout(state) {
      return { ...state, isAuthenticated: false };
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

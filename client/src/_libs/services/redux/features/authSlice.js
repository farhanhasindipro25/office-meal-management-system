import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    setCredentials(state, action) {
      (state.token = action.payload.token), (state.user = action.payload.user);
      localStorage.setItem("token", action.payload.token);
    },
    logout(state) {
      state.accessToken = null;
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentUsersToken = (state) => state.auth.token;

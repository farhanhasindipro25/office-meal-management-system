import { createSlice } from "@reduxjs/toolkit";

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: { user: null, token: null },
  reducers: {
    setAdminLoginCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      localStorage.setItem("token", accessToken);
    },
    adminLogout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setAdminLoginCredentials, adminLogout } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;

export const selectCurrentAdmin = (state) => state.adminAuth.user;
export const selectCurrentAdminsToken = (state) => state.adminAuth.token;

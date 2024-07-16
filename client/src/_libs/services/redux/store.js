import { configureStore } from "@reduxjs/toolkit";
import { adminApiSlice } from "./api/adminApiSlice";
import adminAuthReducer from "./features/admin/adminAuthSlice";

export const store = configureStore({
  reducer: {
    [adminApiSlice.reducerPath]: adminApiSlice.reducer,
    adminAuth: adminAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApiSlice.middleware),
  devTools: true,
});

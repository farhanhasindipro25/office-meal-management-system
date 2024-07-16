import { createApi } from "@reduxjs/toolkit/query/react";
import { adminBaseQueryWithReAuth } from "../../apiConfig/adminBaseQueryWithReAuth";

export const adminApiSlice = createApi({
  reducerPath: "adminApi",
  baseQuery: adminBaseQueryWithReAuth,
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useAdminLoginMutation } = adminApiSlice;

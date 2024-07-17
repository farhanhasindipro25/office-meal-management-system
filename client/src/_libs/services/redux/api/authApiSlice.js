import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReAuth } from "../apiConfig/baseQueryWithReAuth";

export const authApiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;

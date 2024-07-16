import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const adminBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().adminAuth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const adminBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_PUBLIC_BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().adminAuth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

import {
  adminLogout,
  setAdminLoginCredentials,
} from "../features/admin/adminAuthSlice";
import { adminBaseQuery } from "./adminBaseQuery";

export const adminBaseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await adminBaseQuery(args, api, extraOptions);
  if (result?.error?.status === 403) {
    const refreshResult = await adminBaseQuery(
      "/auth/refresh-token",
      api,
      extraOptions
    );
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      api.dispatch(setAdminLoginCredentials({ ...refreshResult.data, user }));
      result = await adminBaseQuery(args, api, extraOptions);
    } else {
      api.dispatch(adminLogout());
    }
  }
  return result;
};

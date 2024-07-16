import { object, string } from "yup";

export const LOGIN_SCHEMA = object({
  email: string().email("Email must be valid").required("Email is required!"),
  password: string().required("Password is required!"),
});

import { object, string } from "yup";

export const ADD_USER_SCHEMA = object({
  role_id: string().required("Role is required"),
  user_name: string().required("User name is required"),
  employee_id: string().required("Employee ID is required"),
  email: string().required("Email is required"),
  phone: string().required("Phone is required"),
  password: string().required("Password is required"),
  gender: string().required("Gender is required"),
});

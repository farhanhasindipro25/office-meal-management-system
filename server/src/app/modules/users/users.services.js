import pool from "../../../db.js";
import {
  GET_USERS_FROM_DB,
  PATCH_USER_IN_DB,
  POST_USER_TO_DB,
} from "./users.repository.js";

const ADD_USER_TO_DB = async (
  user_name,
  employee_id,
  email,
  phone,
  gender,
  password,
  role_id
) => {
  const response = await pool.query(POST_USER_TO_DB, [
    user_name,
    employee_id,
    email,
    phone,
    gender,
    password,
    role_id,
  ]);
  return response;
};

const READ_USERS_FROM_DB = async () => {
  const response = await pool.query(GET_USERS_FROM_DB);
  return response;
};

const UPDATE_USER_IN_DB = async (
  user_name,
  employee_id,
  email,
  phone,
  gender,
  role_id,
  id
) => {
  const response = await pool.query(PATCH_USER_IN_DB, [
    user_name,
    employee_id,
    email,
    phone,
    gender,
    role_id,
    id,
  ]);
  return response;
};

export const UsersServices = {
  ADD_USER_TO_DB,
  READ_USERS_FROM_DB,
  UPDATE_USER_IN_DB,
};

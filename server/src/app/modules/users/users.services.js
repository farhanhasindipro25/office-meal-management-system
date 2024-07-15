import pool from "../../../db.js";
import { UsersRepository } from "./users.repository.js";

const ADD_USER_TO_DB = async (
  user_name,
  employee_id,
  email,
  phone,
  gender,
  password,
  role_id
) => {
  const response = await pool.query(UsersRepository.POST_USER_TO_DB, [
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
  const response = await pool.query(UsersRepository.GET_USERS_FROM_DB);
  return response;
};

const READ_USER_BY_ID_FROM_DB = async (id) => {
  const response = await pool.query(UsersRepository.GET_USER_BY_ID_FROM_DB, [
    id,
  ]);
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
  const response = await pool.query(UsersRepository.PATCH_USER_IN_DB, [
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

const BAN_USER_IN_DB = async (is_banned, id) => {
  await pool.query(UsersRepository.BAN_USER_IN_DB, [is_banned, id]);
};

const CHECK_EMAIL_EXISTS_IN_DB = async (email) => {
  const response = await pool.query(UsersRepository.CHECK_EMAIL_EXISTS, [
    email,
  ]);
  return response;
};

export const UsersServices = {
  ADD_USER_TO_DB,
  READ_USERS_FROM_DB,
  READ_USER_BY_ID_FROM_DB,
  UPDATE_USER_IN_DB,
  BAN_USER_IN_DB,
  CHECK_EMAIL_EXISTS_IN_DB,
};

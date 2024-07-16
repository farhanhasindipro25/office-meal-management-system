import pool from "../../../db.js";
import { UsersRepository } from "./users.repository.js";

const addUserToDB = async (
  user_name,
  employee_id,
  email,
  phone,
  gender,
  password,
  role_id
) => {
  const response = await pool.query(UsersRepository.postUserToDB, [
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

const readUsersFromDB = async () => {
  const response = await pool.query(UsersRepository.getUsersFromDB);
  return response;
};

const readUserByIdFromDB = async (id) => {
  const response = await pool.query(UsersRepository.getUserByIdFromDB, [id]);
  return response;
};

const updateUserInDB = async (
  user_name,
  employee_id,
  email,
  phone,
  gender,
  role_id,
  id
) => {
  const response = await pool.query(UsersRepository.patchUserInDB, [
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

const banUserInDB = async (is_banned, id) => {
  await pool.query(UsersRepository.banUserInDB, [is_banned, id]);
};

const checkEmailExistsInDB = async (email) => {
  const response = await pool.query(UsersRepository.checkEmailExists, [email]);
  return response;
};

export const UsersServices = {
  addUserToDB,
  readUsersFromDB,
  readUserByIdFromDB,
  updateUserInDB,
  banUserInDB,
  checkEmailExistsInDB,
};

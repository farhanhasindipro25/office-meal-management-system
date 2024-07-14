import pool from "../../../db.js";
import { AuthRepository } from "./auth.repository.js";

const LOGIN_USER = async (email, password) => {
  const response = await pool.query(AuthRepository.FIND_USER, [email]);
  return response;
};

export const AuthServices = {
  LOGIN_USER,
};

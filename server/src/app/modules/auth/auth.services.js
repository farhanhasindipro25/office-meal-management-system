import jwt from "jsonwebtoken";
import pool from "../../../db.js";
import { AuthRepository } from "./auth.repository.js";
import config from "../../config/index.js";

const LOGIN_USER = async (email, password) => {
  const response = await pool.query(AuthRepository.FIND_USER, [email]);
  return response;
};

const VERIFY_REFRESH_TOKEN = async (token) => {
  try {
    const decoded = jwt.verify(token, config.refresh_token_secret);
    return { valid: true, decoded };
  } catch (error) {
    return { valid: false, error };
  }
};

export const AuthServices = {
  LOGIN_USER,
  VERIFY_REFRESH_TOKEN,
};

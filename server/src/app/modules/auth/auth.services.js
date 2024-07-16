import jwt from "jsonwebtoken";
import pool from "../../../db.js";
import { AuthRepository } from "./auth.repository.js";
import config from "../../config/index.js";

const loginUser = async (email) => {
  const response = await pool.query(AuthRepository.findUser, [email]);
  return response;
};

const verifyRefreshToken = async (token) => {
  try {
    const decoded = jwt.verify(token, config.refresh_token_secret);
    return { valid: true, decoded };
  } catch (error) {
    return { valid: false, error };
  }
};

export const AuthServices = {
  loginUser,
  verifyRefreshToken,
};

import pool from "../../../db.js";
import { RolesRepository } from "./roles.repository.js";

const ADD_ROLE_TO_DB = async (name) => {
  const response = await pool.query(RolesRepository.POST_ROLE_TO_DB, [name]);
  return response;
};

const READ_ROLES_FROM_DB = async () => {
  const response = await pool.query(RolesRepository.GET_ROLES_FROM_DB);
  return response;
};

export const RolesServices = {
  ADD_ROLE_TO_DB,
  READ_ROLES_FROM_DB,
};

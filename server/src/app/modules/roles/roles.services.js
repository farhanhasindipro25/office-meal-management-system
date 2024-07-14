import pool from "../../../db.js";

const POST_ROLE_TO_DB = "INSERT INTO roles (name) VALUES ($1)";
const GET_ROLES_FROM_DB = "SELECT * FROM roles";

const ADD_ROLE_TO_DB = async (name) => {
  const response = await pool.query(POST_ROLE_TO_DB, [name]);
  return response;
};

const READ_ROLES_FROM_DB = async () => {
  const response = await pool.query(GET_ROLES_FROM_DB);
  return response;
};

export const RolesServices = {
  ADD_ROLE_TO_DB,
  READ_ROLES_FROM_DB,
};

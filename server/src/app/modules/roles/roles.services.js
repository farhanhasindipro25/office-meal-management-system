import pool from "../../../db.js";

const POST_ROLE_TO_DB = `INSERT INTO roles (name) VALUES ($1)`;

const ADD_ROLE_TO_DB = async (name) => {
  await pool.query(POST_ROLE_TO_DB, [name]);
};

export const RolesServices = {
  ADD_ROLE_TO_DB,
};

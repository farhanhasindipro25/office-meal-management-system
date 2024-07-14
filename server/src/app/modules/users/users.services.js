import pool from "../../../db.js";

const POST_USER_TO_DB =
  "INSERT INTO users (user_name, employee_id, email, phone, gender, password, role_id) VALUES ($1, $2, $3, $4, $5, $6, $7)";

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
  console.log(response);
  return response;
};

export const UsersServices = {
  ADD_USER_TO_DB,
};

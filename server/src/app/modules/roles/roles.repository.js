const POST_ROLE_TO_DB = "INSERT INTO roles (name) VALUES ($1)";
const GET_ROLES_FROM_DB = "SELECT * FROM roles";

export const RolesRepository = {
  POST_ROLE_TO_DB,
  GET_ROLES_FROM_DB,
};

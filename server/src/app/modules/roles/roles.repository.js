const postRoleToDB = "INSERT INTO roles (name) VALUES ($1)";
const getRolesFromDB = "SELECT * FROM roles";

export const RolesRepository = {
  postRoleToDB,
  getRolesFromDB,
};

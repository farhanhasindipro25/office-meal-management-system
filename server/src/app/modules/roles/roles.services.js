import pool from "../../../db.js";
import { RolesRepository } from "./roles.repository.js";

const addRoleToDB = async (name) => {
  const response = await pool.query(RolesRepository.postRoleToDB, [name]);
  return response;
};

const readRolesFromDB = async () => {
  const response = await pool.query(RolesRepository.getRolesFromDB);
  return response;
};

export const RolesServices = {
  addRoleToDB,
  readRolesFromDB,
};

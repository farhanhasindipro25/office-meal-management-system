import pool from "../../../db.js";
import { CategoriesRepository } from "./categories.repository.js";

const addCategoryToDb = async (name, description) => {
  const response = await pool.query(CategoriesRepository.postCategoryToDB, [
    name,
    description,
  ]);
  return response;
};

const readCategoriesFromDB = async () => {
  const response = await pool.query(CategoriesRepository.getCategoryFromDB);
  return response;
};

export const CategoriesServices = {
  addCategoryToDb,
  readCategoriesFromDB,
};

import pool from "../../../db.js";
import { CategoriesRepository } from "./categories.repository.js";

const ADD_CATEGORY_TO_DB = async (name, description) => {
  const response = await pool.query(CategoriesRepository.POST_CATEGORY_TO_DB, [
    name,
    description,
  ]);
  return response;
};

const READ_CATEGORIES_FROM_DB = async () => {
  const response = await pool.query(CategoriesRepository.GET_CATEGORY_FROM_DB);
  return response;
};

export const CategoriesServices = {
  ADD_CATEGORY_TO_DB,
  READ_CATEGORIES_FROM_DB,
};

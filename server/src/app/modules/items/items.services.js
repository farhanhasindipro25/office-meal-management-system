import pool from "../../../db.js";
import { ItemsRepository } from "./items.repository.js";

const addItemToDB = async (category_id, name) => {
  const response = await pool.query(ItemsRepository.postItemToDB, [
    category_id,
    name,
  ]);
  return response;
};

const readItemsFromDB = async () => {
  const response = await pool.query(ItemsRepository.getItemsFromDB);
  return response;
};

export const ItemsServices = {
  addItemToDB,
  readItemsFromDB,
};

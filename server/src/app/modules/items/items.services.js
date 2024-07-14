import pool from "../../../db.js";
import { ItemsRepository } from "./items.repository.js";

const ADD_ITEM_TO_DB = async (category_id, name) => {
  const response = await pool.query(ItemsRepository.POST_ITEM_TO_DB, [
    category_id,
    name,
  ]);
  return response;
};

const READ_ITEMS_FROM_DB = async () => {
  const response = await pool.query(ItemsRepository.GET_ITEMS_FROM_DB);
  return response;
};

export const ItemsServices = {
  ADD_ITEM_TO_DB,
  READ_ITEMS_FROM_DB,
};
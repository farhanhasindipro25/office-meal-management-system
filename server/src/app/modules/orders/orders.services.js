import pool from "../../../db.js";
import { OrdersRepository } from "./orders.repository.js";

const ADD_ORDER_TO_DB = async (wants_meal, meal_id, date) => {
  const response = await pool.query(OrdersRepository.POST_ORDER_TO_DB, [
    wants_meal,
    meal_id,
    date,
  ]);
  return response;
};

export const OrdersServices = {
  ADD_ORDER_TO_DB,
};

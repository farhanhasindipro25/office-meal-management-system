import pool from "../../../db.js";
import { OrdersRepository } from "./orders.repository.js";

const ADD_ORDER_TO_DB = async (user_id, wants_meal, meal_id, date) => {
  const response = await pool.query(OrdersRepository.POST_ORDER_TO_DB, [
    user_id,
    wants_meal,
    meal_id,
    date,
  ]);
  return response;
};

const READ_ALL_ORDERS_FROM_DB = async () => {
  const response = await pool.query(OrdersRepository.GET_ALL_ORDERS_FROM_DB);
  return response;
};

const READ_USER_ORDERS_FROM_DB = async (id) => {
  const response = await pool.query(OrdersRepository.GET_USER_ORDERS_FROM_DB, [
    id,
  ]);
  return response;
};

export const OrdersServices = {
  ADD_ORDER_TO_DB,
  READ_ALL_ORDERS_FROM_DB,
  READ_USER_ORDERS_FROM_DB,
};

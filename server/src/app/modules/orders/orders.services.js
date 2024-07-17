import pool from "../../../db.js";
import { OrdersRepository } from "./orders.repository.js";

const addOrderToDB = async (wants_meal, meal_id, date) => {
  const response = await pool.query(OrdersRepository.postOrderToDB, [
    wants_meal,
    meal_id,
    date,
  ]);
  return response;
};

const readAllOrdersFromDB = async () => {
  const response = await pool.query(OrdersRepository.getAllOrdersFromDB);
  return response;
};

const readUserOrdersFromDB = async (id) => {
  const response = await pool.query(OrdersRepository.getUserOrdersFromDB, [id]);
  return response;
};

export const OrdersServices = {
  addOrderToDB,
  readAllOrdersFromDB,
  readUserOrdersFromDB,
};

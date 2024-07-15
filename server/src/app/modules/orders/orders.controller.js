import { OrdersServices } from "./orders.services.js";

const addOrder = async (req, res) => {
  const userID = req.params.id;
  const { wants_meal, meal_id, date } = req.body;
  try {
    await OrdersServices.ADD_ORDER_TO_DB(userID, wants_meal, meal_id, date);
    res.status(201).json({
      status: 201,
      message: "Added new order",
      data: {
        order: {
          wants_meal: wants_meal,
          meal_id: meal_id,
          date: date,
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error,
    });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const result = await OrdersServices.READ_ALL_ORDERS_FROM_DB();
    res.status(200).json({
      status: 200,
      message: "Orders data retrieved.",
      data: {
        orders: result.rows,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error,
    });
  }
};

const getUserOrders = async (req, res) => {
  const userID = req.params.id;
  try {
    const result = await OrdersServices.READ_USER_ORDERS_FROM_DB(userID);
    res.status(200).json({
      status: 200,
      message: "Orders data retrieved.",
      data: {
        orders: result.rows[0],
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error,
    });
  }
};

export const OrdersController = { addOrder, getAllOrders, getUserOrders };

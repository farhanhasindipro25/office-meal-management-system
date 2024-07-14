import { OrdersServices } from "./orders.services.js";

const addOrder = async (req, res) => {
  const { wants_meal, meal_id, date } = req.body;
  try {
    await OrdersServices.ADD_ORDER_TO_DB(wants_meal, meal_id, date);
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

export const OrdersController = { addOrder };

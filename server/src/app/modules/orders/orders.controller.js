import { OrdersServices } from "./orders.services.js";

const addOrder = async (req, res) => {
  const { wants_meal, meal_id, date } = req.body;
  try {
    await OrdersServices.addOrderToDB(wants_meal, meal_id, date);
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
    const result = await OrdersServices.readAllOrdersFromDB();
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
    const result = await OrdersServices.readUserOrdersFromDB(userID);
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

export const OrdersController = { addOrder, getAllOrders, getUserOrders };

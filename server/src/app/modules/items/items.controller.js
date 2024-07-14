import { ItemsServices } from "./items.services.js";

const addItem = async (req, res) => {
  const { category_id, name } = req.body;
  try {
    await ItemsServices.ADD_ITEM_TO_DB(category_id, name);
    res.status(201).json({
      status: 201,
      message: "Added new item",
      data: {
        item: {
          category_id: category_id,
          name: name,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error,
    });
  }
};

const getItems = async (req, res) => {
  try {
    const result = await ItemsServices.READ_ITEMS_FROM_DB();
    res.status(200).json({
      status: 200,
      message: "Items data retrieved.",
      data: {
        items: result.rows,
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

export const ItemsController = {
  addItem,
  getItems,
};
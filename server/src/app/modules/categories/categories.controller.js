import { CategoriesServices } from "./categories.services.js";

const addCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    await CategoriesServices.addCategoryToDb(name, description);
    res.status(201).json({
      status: 201,
      message: "Added new category",
      data: {
        category: {
          name: name,
          description: description,
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

const getCategories = async (req, res) => {
  try {
    const result = await CategoriesServices.readCategoriesFromDB();
    res.status(200).json({
      status: 200,
      message: "Categories data retrieved.",
      data: {
        categories: result.rows,
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

export const CategoriesController = {
  addCategory,
  getCategories,
};

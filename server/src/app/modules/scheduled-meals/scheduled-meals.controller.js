import { ScheduledMealsServices } from "./scheduled-meals.services.js";

const addScheduledMeal = async (req, res) => {
  const { schedule_id, item_id } = req.body;
  try {
    const result = await ScheduledMealsServices.addScheduledMealToDB(
      schedule_id,
      item_id
    );
    const { violationError } = result;
    if (violationError) {
      res.status(400).json({
        status: 400,
        message: violationError,
      });
    }
    res.status(201).json({
      status: 201,
      message: "Added new meal",
      data: {
        meal: {
          schedule_id: schedule_id,
          item_id: item_id,
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

const getScheduledMeals = async (req, res) => {
  try {
    const result = await ScheduledMealsServices.readScheduledMealsFromDB();
    res.status(200).json({
      status: 200,
      message: "Meals data retrieved.",
      data: {
        meals: result.rows,
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

export const ScheduledMealsController = {
  addScheduledMeal,
  getScheduledMeals,
};

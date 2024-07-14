import { ScheduledMealsServices } from "./scheduled-meals.services.js";

const addScheduledMeal = async (req, res) => {
  const { schedule_id, item_id } = req.body;
  try {
    await ScheduledMealsServices.ADD_SCHEDULED_MEAL_TO_DB(schedule_id, item_id);
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
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error,
    });
  }
};

const getScheduledMeals = async (req, res) => {
  try {
    const result = await ScheduledMealsServices.READ_SCHEDULED_MEALS_FROM_DB();
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

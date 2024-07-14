import pool from "../../../db.js";
import { ScheduledMealsRepository } from "./scheduled-meals.repository.js";

const ADD_SCHEDULED_MEAL_TO_DB = async (schedule_id, item_id) => {
  const response = await pool.query(
    ScheduledMealsRepository.POST_SCHEDULED_MEAL_TO_DB,
    [schedule_id, item_id]
  );
  return response;
};

const READ_SCHEDULED_MEALS_FROM_DB = async () => {
  const response = await pool.query(
    ScheduledMealsRepository.GET_SCHEDULED_MEALS_FROM_DB
  );
  return response;
};

export const ScheduledMealsServices = {
  ADD_SCHEDULED_MEAL_TO_DB,
  READ_SCHEDULED_MEALS_FROM_DB,
};

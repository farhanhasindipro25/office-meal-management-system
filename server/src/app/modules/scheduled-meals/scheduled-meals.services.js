import pool from "../../../db.js";
import { ScheduledMealsRepository } from "./scheduled-meals.repository.js";
import { ScheduledMealsUtils } from "./scheduled-meals.utils.js";

const addScheduledMealToDB = async (schedule_id, item_id) => {
  const violationError = await ScheduledMealsUtils.checkMealConstraints(
    schedule_id,
    item_id
  );
  const response = await pool.query(
    ScheduledMealsRepository.postScheduledMealsToDB,
    [schedule_id, item_id]
  );
  return { violationError, response };
};

const readScheduledMealsFromDB = async () => {
  const response = await pool.query(
    ScheduledMealsRepository.getScheduledMealsFromDB
  );
  return response;
};

export const ScheduledMealsServices = {
  addScheduledMealToDB,
  readScheduledMealsFromDB,
};

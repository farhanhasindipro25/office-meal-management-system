import pool from "../../../db.js";
import { SchedulesRepository } from "./weekly-schedules.repository.js";

const ADD_SCHEDULE_TO_DB = async (working_day) => {
  const response = await pool.query(SchedulesRepository.POST_SCHEDULE_TO_DB, [
    working_day,
  ]);
  return response;
};

const READ_SCHEDULE_FROM_DB = async () => {
  const response = await pool.query(SchedulesRepository.GET_SCHEDULES_FROM_DB);
  return response;
};

export const SchedulesServices = {
  ADD_SCHEDULE_TO_DB,
  READ_SCHEDULE_FROM_DB,
};

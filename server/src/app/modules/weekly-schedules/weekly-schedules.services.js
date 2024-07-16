import pool from "../../../db.js";
import { SchedulesRepository } from "./weekly-schedules.repository.js";

const addScheduleToDB = async (working_day) => {
  const response = await pool.query(SchedulesRepository.postScheduleToDB, [
    working_day,
  ]);
  return response;
};

const readScheduleFromDB = async () => {
  const response = await pool.query(SchedulesRepository.getSchedulesFromDB);
  return response;
};

export const SchedulesServices = {
  addScheduleToDB,
  readScheduleFromDB,
};

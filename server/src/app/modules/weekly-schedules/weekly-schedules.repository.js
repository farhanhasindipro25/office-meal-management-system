const postScheduleToDB =
  "INSERT INTO weekly_schedules (working_day, current_month) VALUES ($1, EXTRACT(MONTH FROM CURRENT_DATE)), (2, EXTRACT(MONTH FROM CURRENT_DATE))";

const getSchedulesFromDB = "SELECT * FROM weekly_schedules";

export const SchedulesRepository = {
  postScheduleToDB,
  getSchedulesFromDB,
};

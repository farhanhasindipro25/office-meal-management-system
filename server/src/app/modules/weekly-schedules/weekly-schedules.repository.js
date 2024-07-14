const POST_SCHEDULE_TO_DB =
  "INSERT INTO weekly_schedules (working_day, current_month) VALUES ($1, EXTRACT(MONTH FROM CURRENT_DATE)), (2, EXTRACT(MONTH FROM CURRENT_DATE))";

const GET_SCHEDULES_FROM_DB = "SELECT * FROM weekly_schedules";

export const SchedulesRepository = {
  POST_SCHEDULE_TO_DB,
  GET_SCHEDULES_FROM_DB,
};

const POST_SCHEDULED_MEAL_TO_DB =
  "INSERT INTO scheduled_meals (schedule_id, item_id) VALUES ($1,$2)";

const GET_SCHEDULED_MEALS_FROM_DB = `
  SELECT 
    weekly_schedules.id, weekly_schedules.working_day, weekly_schedules.current_month, STRING_AGG(items.name,',') AS item_name
  FROM 
    weekly_schedules
  INNER JOIN 
    scheduled_meals ON weekly_schedules.id = scheduled_meals.schedule_id
  INNER JOIN 
    items ON scheduled_meals.item_id = items.id
  GROUP BY weekly_schedules.id;
  `;

export const ScheduledMealsRepository = {
  POST_SCHEDULED_MEAL_TO_DB,
  GET_SCHEDULED_MEALS_FROM_DB,
};

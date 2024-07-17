const postScheduledMealsToDB =
  "INSERT INTO scheduled_meals (schedule_id, item_id) VALUES ($1,$2)";

const getScheduledMealsFromDB = `
SELECT 
    weekly_schedules.id, 
    weekly_schedules.working_day, 
    weekly_schedules.current_month, 
    STRING_AGG(DISTINCT items.name, ',') AS item_name, 
    weekly_schedules.start_date, 
    weekly_schedules.end_date
FROM 
    weekly_schedules
INNER JOIN 
    scheduled_meals ON weekly_schedules.id = scheduled_meals.schedule_id
INNER JOIN 
    items ON scheduled_meals.item_id = items.id
GROUP BY 
    weekly_schedules.id, 
    weekly_schedules.working_day, 
    weekly_schedules.current_month, 
    weekly_schedules.start_date, 
    weekly_schedules.end_date;
  `;

const getExistingMeals = `
  SELECT 
    weekly_schedules.id, weekly_schedules.working_day, weekly_schedules.current_month, STRING_AGG(items.name,',') AS item_name
  FROM 
    weekly_schedules
  INNER JOIN 
    scheduled_meals ON weekly_schedules.id = scheduled_meals.schedule_id
  INNER JOIN 
    items ON scheduled_meals.item_id = items.id
    WHERE schedule_id = $1
  GROUP BY weekly_schedules.id`;

export const ScheduledMealsRepository = {
  postScheduledMealsToDB,
  getScheduledMealsFromDB,
  getExistingMeals,
};

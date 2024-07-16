import pool from "../../../db.js";

const checkMealConstraints = async (schedule_id, item_id) => {
  const existingMeals = await pool.query(
    `SELECT item_id FROM scheduled_meals WHERE schedule_id = $1`,
    [schedule_id]
  );

  const itemDetails = await pool.query(`SELECT * FROM items WHERE id = $1`, [
    item_id,
  ]);

  const items = existingMeals.rows.map((meal) => meal.item_id);
  const newItem = itemDetails.rows[0];

  // Fetch item categories
  const categoryDetails = await pool.query(
    `SELECT * FROM categories WHERE id = $1`,
    [newItem.category_id]
  );

  const newItemCategory = categoryDetails.rows[0];

  // Ensure meal has rice item
  const riceItems = items.filter(async (itemId) => {
    const item = await pool.query(`SELECT * FROM items WHERE id = $1`, [
      itemId,
    ]);
    const category = await pool.query(
      `SELECT * FROM categories WHERE id = $1`,
      [item.rows[0].category_id]
    );
    return category.rows[0].name === "Starch";
  });

  if (newItemCategory.name !== "Starch" && riceItems.length === 0) {
    return "Meal must have a rice item to be complete";
  }

  // Ensure meal has at least 3 items
  if (items.length + 1 < 3) {
    return "Meal must have at least 3 items";
  }

  // Ensure meal does not have two protein sources
  const proteinItems = items.filter(async (itemId) => {
    const item = await pool.query(`SELECT * FROM items WHERE id = $1`, [
      itemId,
    ]);
    const category = await pool.query(
      `SELECT * FROM categories WHERE id = $1`,
      [item.rows[0].category_id]
    );
    return category.rows[0].name === "Protein";
  });

  if (newItemCategory.name === "Protein" && proteinItems.length > 0) {
    return "Meal cannot have two protein sources";
  }

  // Check meal repetition constraints
  const repeatedMeals = await pool.query(
    `SELECT COUNT(*) FROM scheduled_meals
       INNER JOIN weekly_schedules ON scheduled_meals.schedule_id = weekly_schedules.id
       WHERE item_id = $1 AND weekly_schedules.working_day BETWEEN 1 AND 5`,
    [item_id]
  );

  if (parseInt(repeatedMeals.rows[0].count, 10) >= 2) {
    return "The same meal can only be repeated a maximum of two days in a week";
  }

  return null; 
};

export const ScheduledMealsUtils = {
  checkMealConstraints,
};

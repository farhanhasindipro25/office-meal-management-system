const postOrderToDB =
  "INSERT INTO orders (wants_meal, meal_id, date, month) VALUES ($1,$2,$3,EXTRACT(MONTH FROM CURRENT_DATE))";

const getUserOrdersFromDB = `
  SELECT
    orders.id AS order_id,
    orders.user_id,
    orders.wants_meal,
    orders.meal_id,
    orders.date,
    STRING_AGG(items.name, ', ') AS item_names
FROM
    orders
LEFT JOIN
    weekly_schedules ON orders.meal_id = weekly_schedules.id
LEFT JOIN
    scheduled_meals ON weekly_schedules.id = scheduled_meals.schedule_id
LEFT JOIN
    items ON scheduled_meals.item_id = items.id
WHERE
    orders.user_id = $1
GROUP BY
    orders.id,
    orders.user_id,
    orders.wants_meal,
    orders.meal_id,
    orders.date
ORDER BY
    orders.date
`;

const getAllOrdersFromDB = `
SELECT
    orders.id AS order_id,
    orders.user_id,
    users.user_name,
    orders.wants_meal,
    orders.date,
    STRING_AGG(items.name, ', ') AS item_names
FROM
    orders
LEFT JOIN
    users ON orders.user_id = users.id
LEFT JOIN
    scheduled_meals ON orders.meal_id = scheduled_meals.schedule_id
LEFT JOIN
    items ON scheduled_meals.item_id = items.id
GROUP BY
    orders.id,
    orders.user_id,
    users.user_name,
    orders.wants_meal,
    orders.date
ORDER BY
    orders.date,
    users.user_name;
`;

export const OrdersRepository = {
  postOrderToDB,
  getAllOrdersFromDB,
  getUserOrdersFromDB,
};

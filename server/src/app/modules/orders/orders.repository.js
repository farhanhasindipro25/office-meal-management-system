const POST_ORDER_TO_DB =
  "INSERT INTO orders (wants_meal, meal_id, date, month) VALUES ($1,$2,$3,EXTRACT(MONTH FROM CURRENT_DATE));";

const GET_USER_ORDERS_FROM_DB = `
SELECT
    users.id AS user_id,
    users.user_name,
    roles.name AS role_name,
    orders.id AS order_id,
    orders.date,
    orders.wants_meal,
    STRING_AGG(items.name, ', ') AS item_names
FROM
    orders
INNER JOIN
    users ON orders.user_id = users.id
INNER JOIN
    roles ON users.role_id = roles.id
LEFT JOIN
    weekly_schedules ON orders.meal_id = weekly_schedules.id
LEFT JOIN
    scheduled_meals ON weekly_schedules.id = scheduled_meals.schedule_id
LEFT JOIN
    items ON scheduled_meals.item_id = items.id
GROUP BY
    users.id,
    users.user_name,
    roles.name,
    orders.id,
    orders.date,
    orders.wants_meal
ORDER BY
    users.user_name,
    orders.date;
  `;

const GET_ALL_ORDERS_FROM_DB = `
SELECT
    users.id AS user_id,
    users.user_name,
    roles.name AS role_name,
    orders.id AS order_id,
    orders.date,
    orders.wants_meal,
    STRING_AGG(items.name, ', ') AS item_names
FROM
    users
INNER JOIN
    roles ON users.role_id = roles.id
LEFT JOIN
    orders ON orders.user_id = users.id
LEFT JOIN
    weekly_schedules ON orders.meal_id = weekly_schedules.id
LEFT JOIN
    scheduled_meals ON weekly_schedules.id = scheduled_meals.schedule_id
LEFT JOIN
    items ON scheduled_meals.item_id = items.id
WHERE
    roles.name = 'GENERAL_USER'
GROUP BY
    users.id,
    users.user_name,
    roles.name,
    orders.id,
    orders.date,
    orders.wants_meal
ORDER BY
    users.user_name,
    orders.date;
`;

export const OrdersRepository = {
  POST_ORDER_TO_DB,
  GET_ALL_ORDERS_FROM_DB,
  GET_USER_ORDERS_FROM_DB,
};

const POST_ORDER_TO_DB =
  "INSERT INTO orders (wants_meal, meal_id, date, month) VALUES ($1,$2,$3,EXTRACT(MONTH FROM CURRENT_DATE));";

export const OrdersRepository = {
  POST_ORDER_TO_DB,
};

import { boolean, object, string } from "yup";

export const ADD_ORDER_SCHEMA = object({
  wants_meal: boolean(),
  meal_id: string(),
  date: string().required("Date is required"),
});

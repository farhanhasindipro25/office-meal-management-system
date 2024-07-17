import { object, string } from "yup";

export const ADD_ORDER_SCHEMA = object({
  wants_meal: string().required("Your choice is required"),
  meal_id: string().required("Meal selection is required"),
  date: string().required("Date is required"),
});

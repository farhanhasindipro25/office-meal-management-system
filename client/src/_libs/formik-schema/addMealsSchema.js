import { object, string } from "yup";

export const ADD_MEALS_SCHEMA = object({
  schedule_id: string().required("Schedule is required"),
  item_id: string().required("Item name is required"),
});

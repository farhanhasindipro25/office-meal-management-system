import { object, string } from "yup";

export const ADD_ITEM_SCHEMA = object({
  category_id: string().required("Category is required"),
  name: string().required("Item name is required"),
});

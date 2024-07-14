const POST_CATEGORY_TO_DB =
  "INSERT INTO categories (name, description) VALUES ($1, $2)";

const GET_CATEGORY_FROM_DB = "SELECT * FROM categories";

export const CategoriesRepository = {
  POST_CATEGORY_TO_DB,
  GET_CATEGORY_FROM_DB,
};

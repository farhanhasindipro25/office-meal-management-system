const postCategoryToDB =
  "INSERT INTO categories (name, description) VALUES ($1, $2)";

const getCategoryFromDB = "SELECT * FROM categories";

export const CategoriesRepository = {
  postCategoryToDB,
  getCategoryFromDB,
};

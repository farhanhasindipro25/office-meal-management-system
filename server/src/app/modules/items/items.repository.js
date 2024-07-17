const postItemToDB = "INSERT INTO items (category_id, name) VALUES ($1,$2)";

const getItemsFromDB = `
SELECT 
    items.id,
    items.name,
    categories.name AS category_name,
    items.created_at,
    items.updated_at
FROM 
    items
INNER JOIN 
    categories
ON 
    items.category_id = categories.id;
`;

const deleteItemFromDB = "DELETE FROM items WHERE id = $1";

export const ItemsRepository = {
  postItemToDB,
  getItemsFromDB,
  deleteItemFromDB,
};

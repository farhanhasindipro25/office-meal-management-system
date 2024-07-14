const POST_ITEM_TO_DB = "INSERT INTO items (category_id, name) VALUES ($1,$2)";

const GET_ITEMS_FROM_DB = `
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

export const ItemsRepository = {
  POST_ITEM_TO_DB,
  GET_ITEMS_FROM_DB,
};

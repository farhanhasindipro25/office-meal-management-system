const POST_ITEM_TO_DB = "INSERT INTO items (category_id, name) VALUES ($1,$2)";

export const ItemsRepository = {
  POST_ITEM_TO_DB,
};

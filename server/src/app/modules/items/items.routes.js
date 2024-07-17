import { Router } from "express";
import { ItemsController } from "./items.controller.js";
import authenticateUser from "../../middlewares/AuthenticateUser.js";
import authorizeUser from "../../middlewares/authorizeUser.js";

const router = Router();
router.post(
  "/create-item",
  authenticateUser,
  authorizeUser("ADMIN"),
  ItemsController.addItem
);
router.get(
  "/",
  authenticateUser,
  authorizeUser("ADMIN"),
  ItemsController.getItems
);

router.delete(
  "/:id",
  authenticateUser,
  authorizeUser("ADMIN"),
  ItemsController.deleteItem
);

export const ItemRoutes = router;

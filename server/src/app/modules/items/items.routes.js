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

export const ItemRoutes = router;

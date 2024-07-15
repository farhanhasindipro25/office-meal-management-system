import { Router } from "express";
import { ItemsController } from "./items.controller.js";
import AuthenticateUser from "../../middlewares/AuthenticateUser.js";
import AuthorizeUser from "../../middlewares/AuthorizeUser.js";

const router = Router();
router.post(
  "/create-item",
  AuthenticateUser,
  AuthorizeUser("ADMIN"),
  ItemsController.addItem
);
router.get(
  "/",
  AuthenticateUser,
  AuthorizeUser("ADMIN"),
  ItemsController.getItems
);

export const ItemRoutes = router;

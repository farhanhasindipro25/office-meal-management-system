import { Router } from "express";
import { CategoriesController } from "./categories.controller.js";
import AuthenticateUser from "../../middlewares/AuthenticateUser.js";
import AuthorizeUser from "../../middlewares/AuthorizeUser.js";

const router = Router();
router.post(
  "/create-category",
  AuthenticateUser,
  AuthorizeUser("ADMIN", "GENERAL_USER"),
  CategoriesController.addCategory
);
router.get(
  "/",
  AuthenticateUser,
  AuthorizeUser("ADMIN", "GENERAL_USER"),
  CategoriesController.getCategories
);

export const CategoriesRoutes = router;

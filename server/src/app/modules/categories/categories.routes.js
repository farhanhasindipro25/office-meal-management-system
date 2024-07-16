import { Router } from "express";
import { CategoriesController } from "./categories.controller.js";
import authenticateUser from "../../middlewares/authenticateUser.js";
import authorizeUser from "../../middlewares/authorizeUser.js";

const router = Router();
router.post(
  "/create-category",
  authenticateUser,
  authorizeUser("ADMIN"),
  CategoriesController.addCategory
);
router.get(
  "/",
  authenticateUser,
  authorizeUser("ADMIN"),
  CategoriesController.getCategories
);

export const CategoriesRoutes = router;

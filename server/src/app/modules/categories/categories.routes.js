import { Router } from "express";
import { CategoriesController } from "./categories.controller.js";

const router = Router();
router.post("/create-category", CategoriesController.addCategory);
router.get("/", CategoriesController.getCategories);

export const CategoriesRoutes = router;

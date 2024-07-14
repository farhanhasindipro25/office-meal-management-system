import { Router } from "express";
import { CategoriesController } from "./categories.controller.js";

const router = Router();
router.post("/create-category", CategoriesController.addCategory);

export const CategoriesRoutes = router;

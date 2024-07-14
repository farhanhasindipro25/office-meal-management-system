import { Router } from "express";
import { ItemsController } from "./items.controller.js";

const router = Router();
router.post("/create-item", ItemsController.addItem);

export const ItemRoutes = router;

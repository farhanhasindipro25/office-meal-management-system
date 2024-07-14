import { Router } from "express";
import { ItemsController } from "./items.controller.js";

const router = Router();
router.post("/create-item", ItemsController.addItem);
router.get("/", ItemsController.getItems);

export const ItemRoutes = router;
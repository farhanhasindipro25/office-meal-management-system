import { Router } from "express";
import { OrdersController } from "./orders.controller.js";

const router = Router();
router.post("/create-order", OrdersController.addOrder);

export const OrdersRoutes = router;

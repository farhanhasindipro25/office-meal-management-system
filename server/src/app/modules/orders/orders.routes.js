import { Router } from "express";
import { OrdersController } from "./orders.controller.js";
import AuthenticateUser from "../../middlewares/AuthenticateUser.js";

const router = Router();
router.post("/create-order", AuthenticateUser, OrdersController.addOrder);

export const OrdersRoutes = router;

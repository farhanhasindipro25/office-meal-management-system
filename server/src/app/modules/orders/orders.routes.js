import { Router } from "express";
import { OrdersController } from "./orders.controller.js";
import authenticateUser from "../../middlewares/AuthenticateUser.js";
import authorizeUser from "../../middlewares/authorizeUser.js";

const router = Router();
router.post(
  "/:id/create-order",
  authenticateUser,
  authorizeUser("GENERAL_USER"),
  OrdersController.addOrder
);
router.get(
  "/all",
  authenticateUser,
  authorizeUser("ADMIN"),
  OrdersController.getAllOrders
);
router.get(
  "/:id",
  authenticateUser,
  authorizeUser("GENERAL_USER"),
  OrdersController.getUserOrders
);

export const OrdersRoutes = router;

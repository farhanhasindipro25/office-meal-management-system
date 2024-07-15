import { Router } from "express";
import { OrdersController } from "./orders.controller.js";
import AuthenticateUser from "../../middlewares/AuthenticateUser.js";
import AuthorizeUser from "../../middlewares/AuthorizeUser.js";

const router = Router();
router.post(
  "/:id/create-order",
  AuthenticateUser,
  AuthorizeUser("GENERAL_USER"),
  OrdersController.addOrder
);
router.get(
  "/all",
  AuthenticateUser,
  AuthorizeUser("ADMIN"),
  OrdersController.getAllOrders
);
router.get(
  "/:id",
  AuthenticateUser,
  AuthorizeUser("GENERAL_USER"),
  OrdersController.getUserOrders
);

export const OrdersRoutes = router;

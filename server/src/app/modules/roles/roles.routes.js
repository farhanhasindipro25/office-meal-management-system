import { Router } from "express";
import { RolesController } from "./roles.controller.js";
import authenticateUser from "../../middlewares/AuthenticateUser.js";
import authorizeUser from "../../middlewares/authorizeUser.js";

const router = Router();
router.post(
  "/create-role",
  authenticateUser,
  authorizeUser("ADMIN"),
  RolesController.addRole
);
router.get(
  "/",
  authenticateUser,
  authorizeUser("ADMIN"),
  RolesController.getRoles
);

export const RolesRoutes = router;

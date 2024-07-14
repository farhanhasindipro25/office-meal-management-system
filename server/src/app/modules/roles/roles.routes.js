import { Router } from "express";
import { RolesController } from "./roles.controller.js";
import AuthenticateUser from "../../middlewares/AuthenticateUser.js";
import AuthorizeUser from "../../middlewares/AuthorizeUser.js";

const router = Router();
router.post(
  "/create-role",
  AuthenticateUser,
  AuthorizeUser("ADMIN", "GENERAL_USER"),
  RolesController.addRole
);
router.get(
  "/",
  AuthenticateUser,
  AuthorizeUser("ADMIN", "GENERAL_USER"),
  RolesController.getRoles
);

export const RolesRoutes = router;

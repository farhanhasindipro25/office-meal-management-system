import { Router } from "express";
import { RolesController } from "./roles.controller.js";
import AuthenticateUser from "../../middlewares/AuthenticateUser.js";
import AuthorizeUser from "../../middlewares/AuthorizeUser.js";

const router = Router();
router.post(
  "/create-role",
  AuthenticateUser,
  AuthorizeUser("ADMIN"),
  RolesController.addRole
);
router.get(
  "/",
  AuthenticateUser,
  AuthorizeUser("ADMIN"),
  RolesController.getRoles
);

export const RolesRoutes = router;

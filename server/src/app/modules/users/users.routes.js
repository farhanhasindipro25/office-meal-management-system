import { Router } from "express";
import { UsersController } from "./users.controller.js";
import AuthorizeUser from "../../middlewares/AuthorizeUser.js";
import AuthenticateUser from "../../middlewares/AuthenticateUser.js";

const router = Router();
router.post(
  "/create-user",
  AuthenticateUser,
  AuthorizeUser("ADMIN", "GENERAL_USER"),
  UsersController.addUser
);
router.get(
  "/",
  AuthenticateUser,
  AuthorizeUser("ADMIN", "GENERAL_USER"),
  UsersController.getUsers
);
router.get("/:id", AuthenticateUser, UsersController.getUserById);
router.patch(
  "/:id/edit",
  AuthenticateUser,
  AuthorizeUser("ADMIN", "GENERAL_USER"),
  UsersController.editUser
);
router.patch(
  "/:id/ban",
  AuthenticateUser,
  AuthorizeUser("ADMIN", "GENERAL_USER"),
  UsersController.banUser
);

export const UsersRoutes = router;

import { Router } from "express";
import { UsersController } from "./users.controller.js";
import AuthorizeUser from "../../middlewares/AuthorizeUser.js";
import AuthenticateUser from "../../middlewares/AuthenticateUser.js";

const router = Router();
router.post(
  "/create-user",
  AuthenticateUser,
  AuthorizeUser("ADMIN"),
  UsersController.addUser
);
router.get(
  "/",
  AuthenticateUser,
  AuthorizeUser("ADMIN"),
  UsersController.getUsers
);
router.get(
  "/:id",
  AuthenticateUser,
  AuthorizeUser("GENERAL_USER"),
  UsersController.getUserById
);
router.patch(
  "/:id/edit",
  AuthenticateUser,
  AuthorizeUser("ADMIN"),
  UsersController.editUser
);
router.patch(
  "/:id/ban",
  AuthenticateUser,
  AuthorizeUser("ADMIN"),
  UsersController.banUser
);

export const UsersRoutes = router;

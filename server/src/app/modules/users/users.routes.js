import { Router } from "express";
import { UsersController } from "./users.controller.js";
import authenticateUser from "../../middlewares/AuthenticateUser.js";
import authorizeUser from "../../middlewares/authorizeUser.js";

const router = Router();
router.post(
  "/create-user",
  authenticateUser,
  authorizeUser("ADMIN"),
  UsersController.addUser
);
router.get(
  "/",
  authenticateUser,
  authorizeUser("ADMIN"),
  UsersController.getUsers
);
router.get("/:id", authenticateUser, UsersController.getUserById);
router.patch(
  "/:id/edit",
  authenticateUser,
  authorizeUser("ADMIN"),
  UsersController.editUser
);
router.patch(
  "/:id/ban",
  authenticateUser,
  authorizeUser("ADMIN"),
  UsersController.banUser
);

export const UsersRoutes = router;

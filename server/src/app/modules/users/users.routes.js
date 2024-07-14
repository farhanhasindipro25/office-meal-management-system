import { Router } from "express";
import { UsersController } from "./users.controller.js";

const router = Router();
router.post("/create-user", UsersController.addUser);
router.get("/", UsersController.getUsers);
router.get("/:id", UsersController.getUserById);
router.patch("/:id/edit", UsersController.editUser);
router.patch("/:id/ban", UsersController.banUser);

export const UsersRoutes = router;

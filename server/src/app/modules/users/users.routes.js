import { Router } from "express";
import { UsersController } from "./users.controller.js";

const router = Router();
router.post("/create-user", UsersController.addUser);
router.get("/", UsersController.getUsers);
router.patch("/:id", UsersController.editUser);

export const UsersRoutes = router;

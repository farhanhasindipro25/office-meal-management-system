import { Router } from "express";
import { UsersController } from "./users.controller.js";

const router = Router();
router.post("/create-user", UsersController.addUser);

export const UsersRoutes = router;

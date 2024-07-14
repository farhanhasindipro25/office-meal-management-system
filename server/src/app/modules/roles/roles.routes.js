import { Router } from "express";
import { RolesController } from "./roles.controller.js";

const router = Router();
router.post("/create-role", RolesController.addRole);
router.get("/", RolesController.getRoles);

export const RolesRoutes = router;

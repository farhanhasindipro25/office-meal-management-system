import { Router } from "express";
import { RolesController } from "./roles.controller.js";

const router = Router();
router.post("/", RolesController.addRole);

export const RolesRoutes = router;

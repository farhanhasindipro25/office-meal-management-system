import { Router } from "express";
import { AuthController } from "./auth.controller.js";

const router = Router();

router.post("/login", AuthController.loginUser);
router.post("/refresh-token", AuthController.getRefreshToken);

export const AuthRoutes = router;

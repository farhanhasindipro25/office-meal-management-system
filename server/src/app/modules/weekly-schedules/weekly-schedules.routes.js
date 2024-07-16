import { Router } from "express";
import { SchedulesController } from "./weekly-schedules.controller.js";
import authenticateUser from "../../middlewares/AuthenticateUser.js";
import authorizeUser from "../../middlewares/authorizeUser.js";

const router = Router();
router.post(
  "/create-schedule",
  authenticateUser,
  authorizeUser("ADMIN"),
  SchedulesController.addSchedule
);
router.get(
  "/",
  authenticateUser,
  authorizeUser("ADMIN"),
  SchedulesController.getSchedules
);

export const SchedulesRoutes = router;

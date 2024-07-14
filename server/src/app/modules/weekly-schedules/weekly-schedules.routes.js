import { Router } from "express";
import { SchedulesController } from "./weekly-schedules.controller.js";
import AuthenticateUser from "../../middlewares/AuthenticateUser.js";
import AuthorizeUser from "../../middlewares/AuthorizeUser.js";

const router = Router();
router.post(
  "/create-schedule",
  AuthenticateUser,
  AuthorizeUser("ADMIN", "GENERAL_USER"),
  SchedulesController.addSchedule
);
router.get(
  "/",
  AuthenticateUser,
  AuthorizeUser("ADMIN", "GENERAL_USER"),
  SchedulesController.getSchedules
);

export const SchedulesRoutes = router;

import { Router } from "express";
import { SchedulesController } from "./weekly-schedules.controller.js";
import AuthenticateUser from "../../middlewares/AuthenticateUser.js";
import AuthorizeUser from "../../middlewares/AuthorizeUser.js";

const router = Router();
router.post(
  "/create-schedule",
  AuthenticateUser,
  AuthorizeUser("ADMIN"),
  SchedulesController.addSchedule
);
router.get(
  "/",
  AuthenticateUser,
  AuthorizeUser("ADMIN"),
  SchedulesController.getSchedules
);

export const SchedulesRoutes = router;

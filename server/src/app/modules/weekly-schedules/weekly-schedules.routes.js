import { Router } from "express";
import { SchedulesController } from "./weekly-schedules.controller.js";

const router = Router();
router.post("/create-schedule", SchedulesController.addSchedule);
router.get("/", SchedulesController.getSchedules);

export const SchedulesRoutes = router;

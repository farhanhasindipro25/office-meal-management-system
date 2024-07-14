import { Router } from "express";
import { ScheduledMealsController } from "./scheduled-meals.controller.js";

const router = Router();
router.post(
  "/create-scheduled-meal",
  ScheduledMealsController.addScheduledMeal
);
router.get("/", ScheduledMealsController.getScheduledMeals);

export const ScheduledMealsRoutes = router;

import { Router } from "express";
import { ScheduledMealsController } from "./scheduled-meals.controller.js";
import authenticateUser from "../../middlewares/AuthenticateUser.js";
import authorizeUser from "../../middlewares/authorizeUser.js";

const router = Router();
router.post(
  "/create-scheduled-meal",
  authenticateUser,
  authorizeUser("ADMIN"),
  ScheduledMealsController.addScheduledMeal
);
router.get(
  "/",
  authenticateUser,
  authorizeUser("ADMIN"),
  ScheduledMealsController.getScheduledMeals
);

export const ScheduledMealsRoutes = router;

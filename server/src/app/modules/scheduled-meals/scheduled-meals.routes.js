import { Router } from "express";
import { ScheduledMealsController } from "./scheduled-meals.controller.js";
import AuthenticateUser from "../../middlewares/AuthenticateUser.js";
import AuthorizeUser from "../../middlewares/AuthorizeUser.js";

const router = Router();
router.post(
  "/create-scheduled-meal",
  AuthenticateUser,
  AuthorizeUser("ADMIN"),
  ScheduledMealsController.addScheduledMeal
);
router.get("/", AuthenticateUser, ScheduledMealsController.getScheduledMeals);

export const ScheduledMealsRoutes = router;

import { Router } from "express";
import { RolesRoutes } from "../modules/roles/roles.routes.js";
import { UsersRoutes } from "../modules/users/users.routes.js";
import { CategoriesRoutes } from "../modules/categories/categories.routes.js";
import { ItemRoutes } from "../modules/items/items.routes.js";
import { SchedulesRoutes } from "../modules/weekly-schedules/weekly-schedules.routes.js";
import { ScheduledMealsRoutes } from "../modules/scheduled-meals/scheduled-meals.routes.js";
import { OrdersRoutes } from "../modules/orders/orders.routes.js";
import { AuthRoutes } from "../modules/auth/auth.routes.js";

const APP_ROUTES = Router();

const moduleRoutes = [
  {
    path: "/roles",
    route: RolesRoutes,
  },
  {
    path: "/users",
    route: UsersRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/categories",
    route: CategoriesRoutes,
  },
  {
    path: "/items",
    route: ItemRoutes,
  },
  {
    path: "/schedules",
    route: SchedulesRoutes,
  },
  {
    path: "/meals",
    route: ScheduledMealsRoutes,
  },
  {
    path: "/orders",
    route: OrdersRoutes,
  },
];

moduleRoutes.forEach((route) => APP_ROUTES.use(route.path, route.route));

export default APP_ROUTES;

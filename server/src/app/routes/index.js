import { Router } from "express";
import { RolesRoutes } from "../modules/roles/roles.routes.js";
import { UsersRoutes } from "../modules/users/users.routes.js";
import { CategoriesRoutes } from "../modules/categories/categories.routes.js";

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
  //   {
  //     path: "/auth",
  //     route: "",
  //   },
  {
    path: "/categories",
    route: CategoriesRoutes,
  },
  //   {
  //     path: "/items",
  //     route: "",
  //   },
  //   {
  //     path: "/weekly-schedules",
  //     route: "",
  //   },
  //   {
  //     path: "/scheduled-meals",
  //     route: "",
  //   },
  //   {
  //     path: "/orders",
  //     route: "",
  //   },
];

moduleRoutes.forEach((route) => APP_ROUTES.use(route.path, route.route));

export default APP_ROUTES;

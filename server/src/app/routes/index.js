import { Router } from "express";
import { RolesRoutes } from "../modules/roles/roles.routes.js";

const APP_ROUTES = Router();

const moduleRoutes = [
  {
    path: "/roles",
    route: RolesRoutes,
  },
  //   {
  //     path: "/users",
  //     route: "",
  //   },
  //   {
  //     path: "/auth",
  //     route: "",
  //   },
  //   {
  //     path: "/categories",
  //     route: "",
  //   },
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

import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import AdminLayout from "../components/layouts/admin/AdminLayout";
import EmployeesLayout from "../components/layouts/employees/EmployeesLayout";
import ItemManagement from "../../pages/admin/ItemManagement";
import MealManagement from "../../pages/admin/MealManagement";
import MealOrders from "../../pages/admin/MealOrders";
import UserManagement from "../../pages/admin/UserManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <UserManagement />,
      },
      {
        path: "/admin/items",
        element: <ItemManagement />,
      },
      {
        path: "/admin/meals",
        element: <MealManagement />,
      },
      {
        path: "/admin/orders",
        element: <MealOrders />,
      },
    ],
  },
  {
    path: "/employee",
    element: <EmployeesLayout />,
    children: [
      //   {
      //     path: "/dashboard",
      //     element: <Dashboard />,
      //   },
    ],
  },
]);

export default router;

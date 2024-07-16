import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import AdminLayout from "../components/layouts/admin/AdminLayout";
import EmployeesLayout from "../components/layouts/employees/EmployeesLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      //   {
      //     path: "/dashboard",
      //     element: <Dashboard />,
      //   },
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

import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import AdminLayout from "../components/layouts/admin/AdminLayout";
import EmployeesLayout from "../components/layouts/employees/EmployeesLayout";
import ItemManagement from "../../pages/admin/ItemManagement";
import MealManagement from "../../pages/admin/MealManagement";
import MealOrders from "../../pages/admin/MealOrders";
import UserManagement from "../../pages/admin/UserManagement";
import AdminAuthGuardHOC from "../components/pages/Admin/AdminAuthGuardHOC";
import EmployeeAuthGuardHOC from "../components/pages/Employee/EmployeeAuthGuardHOC";
import AddUser from "../../pages/admin/AddUserModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: (
      <AdminAuthGuardHOC>
        <AdminLayout />
      </AdminAuthGuardHOC>
    ),
    children: [
      {
        path: "/admin",
        element: (
          <AdminAuthGuardHOC>
            <UserManagement />
          </AdminAuthGuardHOC>
        ),
      },
      {
        path: "/admin/add-user",
        element: (
          <AdminAuthGuardHOC>
            <AddUser />
          </AdminAuthGuardHOC>
        ),
      },
      {
        path: "/admin/items",
        element: (
          <AdminAuthGuardHOC>
            <ItemManagement />
          </AdminAuthGuardHOC>
        ),
      },
      {
        path: "/admin/meals",
        element: (
          <AdminAuthGuardHOC>
            <MealManagement />
          </AdminAuthGuardHOC>
        ),
      },
      {
        path: "/admin/orders",
        element: (
          <AdminAuthGuardHOC>
            <MealOrders />
          </AdminAuthGuardHOC>
        ),
      },
    ],
  },
  {
    path: "/employee",
    element: (
      <EmployeeAuthGuardHOC>
        <EmployeesLayout />
      </EmployeeAuthGuardHOC>
    ),
    children: [],
  },
]);

export default router;

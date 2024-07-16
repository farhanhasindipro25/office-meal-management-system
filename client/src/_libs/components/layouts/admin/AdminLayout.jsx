import { Outlet } from "react-router-dom";
import AdminLeftSideNavigations from "../../pages/Admin/AdminLeftSideNavigations";

export default function AdminLayout() {
  return (
    <div className="flex w-full">
      <AdminLeftSideNavigations />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

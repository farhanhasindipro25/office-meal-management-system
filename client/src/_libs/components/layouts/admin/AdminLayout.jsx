import { Outlet, useNavigate } from "react-router-dom";
import AdminLeftSideNavigations from "../../pages/Admin/AdminLeftSideNavigations";
import HorizontalTabNavigation from "../../ui/HorizontalTabNavigation";
import { adminNavigationOptions } from "../../../statics/AdminNavigationOptions";
import {
  ArrowLeftStartOnRectangleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Button from "../../ui/Button";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logout } from "../../../services/redux/features/authSlice";

export default function AdminLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/");
  };
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <>
        <div className="hidden w-1/5 lg:block">
          <AdminLeftSideNavigations />
        </div>
        <div className="block space-y-4 py-10 px-4 lg:hidden">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="w-full flex justify-start gap-4 items-center">
              <UserIcon className="w-10 h-10 p-2 rounded-full bg-indigo-100 text-indigo-600" />
              <div className="w-3/5">
                <h2 className="font-semibold text-sm truncate text-gray-700">
                  FARHAN HASIN DIPRO
                </h2>
                <h2 className="text-xs font-medium truncate text-gray-500">
                  farhan.hasin.25@gmail.com
                </h2>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <Button
                variant="secondary"
                className="px-4 text-sm gap-2"
                onClick={() => handleLogout()}
              >
                <ArrowLeftStartOnRectangleIcon className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>
          <HorizontalTabNavigation tabs={adminNavigationOptions} />
        </div>
      </>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

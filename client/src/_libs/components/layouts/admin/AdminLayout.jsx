import { Outlet, useNavigate } from "react-router-dom";
import AdminLeftSideNavigations from "../../pages/Admin/AdminLeftSideNavigations";
import HorizontalTabNavigation from "../../ui/HorizontalTabNavigation";
import { adminNavigationOptions } from "../../../statics/AdminNavigationOptions";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
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
        <div className="hidden min-h-screen w-1/5 lg:block">
          <AdminLeftSideNavigations />
        </div>
        <div className="block space-y-4 py-6 px-4 lg:hidden">
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
          <HorizontalTabNavigation tabs={adminNavigationOptions} />
        </div>
      </>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

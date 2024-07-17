import { Outlet, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { logout } from "../../../services/redux/features/authSlice";
import toast from "react-hot-toast";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";

export default function EmployeesLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/");
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="space-y-4 py-6 px-4">
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
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

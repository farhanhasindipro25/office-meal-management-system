import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeftStartOnRectangleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  ACTIVE_ICON_STYLES,
  ACTIVE_TAB_STYLES,
  ACTIVE_TEXT_STYLES,
  DEFAULT_ICON_STYLES,
  DEFAULT_TAB_STYLES,
  DEFAULT_TEXT_STYLES,
} from "../../../styles/pages/LeftSideNavigationStyles";

import Button from "../../ui/Button";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logout } from "../../../services/redux/features/authSlice";
import { adminNavigationOptions } from "../../../statics/AdminNavigationOptions";

export default function AdminLeftSideNavigations() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/");
  };
  return (
    <div className="w-full h-full bg-white border-r border-gray-300">
      <div className="divide-y divide-gray-200">
        <div className="p-4 w-full flex justify-start gap-4 items-center">
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
        <div>
          {adminNavigationOptions?.map((option, index) => (
            <NavLink
              key={index + 1}
              to={option.href}
              className={
                pathname === option.href
                  ? ACTIVE_TAB_STYLES
                  : DEFAULT_TAB_STYLES
              }
            >
              <option.icon
                className={
                  pathname === option.href
                    ? ACTIVE_ICON_STYLES
                    : DEFAULT_ICON_STYLES
                }
              />
              <h2
                className={
                  pathname === option.href
                    ? ACTIVE_TEXT_STYLES
                    : DEFAULT_TEXT_STYLES
                }
              >
                {option.name}
              </h2>
            </NavLink>
          ))}
        </div>
        <div className="px-4 w-full flex justify-end pt-4">
          <Button
            variant="secondary"
            className="px-4 py-2 text-sm gap-2"
            onClick={() => handleLogout()}
          >
            <ArrowLeftStartOnRectangleIcon className="w-5 h-5" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

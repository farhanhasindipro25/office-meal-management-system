import { NavLink, useLocation } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/outline";
import {
  ACTIVE_ICON_STYLES,
  ACTIVE_TAB_STYLES,
  ACTIVE_TEXT_STYLES,
  DEFAULT_ICON_STYLES,
  DEFAULT_TAB_STYLES,
  DEFAULT_TEXT_STYLES,
} from "../../../styles/pages/LeftSideNavigationStyles";
import { adminLeftSideNavigationOptions } from "../../../statics/AdminLeftSideNavigationOptions";

export default function AdminLeftSideNavigations() {
  const { pathname } = useLocation();
  return (
    <div className="w-1/5 h-screen bg-white border-r border-gray-300">
      <div className="divide-y divide-gray-200">
        <div className="p-4 flex items-center gap-4">
          <UserIcon className="w-12 h-12 p-3 rounded-full bg-indigo-100 text-indigo-600" />
          <div className="w-3/4">
            <h2 className="font-semibold text-gray-700">FARHAN HASIN DIPRO</h2>
            <h2 className="text-sm font-medium text-gray-500">
              farhan.hasin.25@gmail.com
            </h2>
          </div>
        </div>
        <div>
          {adminLeftSideNavigationOptions?.map((option, index) => (
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
      </div>
    </div>
  );
}

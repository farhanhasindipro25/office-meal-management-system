import { NavLink, useLocation } from "react-router-dom";
import cn from "../../utils/cn";
import {
  ACTIVE_TAB_STYLES,
  DEFAULT_STYLES,
  DEFAULT_TAB_STYLES,
} from "../../styles/ui/HorizontalNavigationStyles";

export default function HorizontalTabNavigation({ tabs }) {
  const { pathname } = useLocation();
  return (
    <ul className="no-scrollbar flex w-full gap-4 overflow-x-auto border-b border-gray-300 bg-white pb-[7px] md:justify-start md:gap-6">
      {tabs.map((tab) => (
        <li key={tab.name}>
          <NavLink
            to={tab.href}
            className={cn(
              DEFAULT_STYLES,
              pathname === tab.href ? ACTIVE_TAB_STYLES : DEFAULT_TAB_STYLES
            )}
          >
            {tab.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

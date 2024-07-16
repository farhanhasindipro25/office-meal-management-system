import {
  BoltIcon,
  CalendarDaysIcon,
  Square2StackIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export const adminLeftSideNavigationOptions = [
  {
    name: "User Management",
    href: "/admin",
    icon: UserGroupIcon,
  },
  {
    name: "Item Management",
    href: "/admin/items",
    icon: Square2StackIcon,
  },
  {
    name: "Meal Management",
    href: "/admin/meals",
    icon: BoltIcon,
  },
  {
    name: "Meal Orders",
    href: "/admin/orders",
    icon: CalendarDaysIcon,
  },
];

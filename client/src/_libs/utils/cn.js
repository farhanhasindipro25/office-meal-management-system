import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...classnames) {
  return twMerge(clsx(classnames));
}

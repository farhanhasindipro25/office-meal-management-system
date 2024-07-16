import cn from "@/common/helpers/UtilKit";
import { cva } from "class-variance-authority";
import {
  ACCENT_BUTTON_STYLES,
  DEFAULT_BUTTON_STYLES,
  LARGE_BUTTON_STYLES,
  MEDIUM_BUTTON_STYLES,
  PRIMARY_BUTTON_STYLES,
  SECONDARY_BUTTON_STYLES,
  SKELETON_BUTTON_STYLES,
  SMALL_BUTTON_STYLES,
  TERTIARY_BUTTON_STYLES,
} from "../../styles/ui/ButtonStyles";

const BUTTON_VARIANTS = cva(DEFAULT_BUTTON_STYLES, {
  variants: {
    variant: {
      primary: PRIMARY_BUTTON_STYLES,
      secondary: SECONDARY_BUTTON_STYLES,
      tertiary: TERTIARY_BUTTON_STYLES,
      accent: ACCENT_BUTTON_STYLES,
      skeleton: SKELETON_BUTTON_STYLES,
    },
    size: {
      large: LARGE_BUTTON_STYLES,
      medium: MEDIUM_BUTTON_STYLES,
      small: SMALL_BUTTON_STYLES,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export default function Button({
  children,
  variant,
  size,
  className,
  type,
  ...props
}) {
  const BUTTON_STYLES = cn(BUTTON_VARIANTS({ variant, size }), className);

  return (
    <button className={BUTTON_STYLES} type={type} {...props}>
      {children}
    </button>
  );
}

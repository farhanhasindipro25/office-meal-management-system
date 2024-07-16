import { cva } from "class-variance-authority";
import {
  DEFAULT_BUTTON_STYLES,
  PRIMARY_BUTTON_STYLES,
  SECONDARY_BUTTON_STYLES,
  SKELETON_BUTTON_STYLES,
} from "../../styles/ui/ButtonStyles";
import cn from "../../utils/cn";

const BUTTON_VARIANTS = cva(DEFAULT_BUTTON_STYLES, {
  variants: {
    variant: {
      primary: PRIMARY_BUTTON_STYLES,
      secondary: SECONDARY_BUTTON_STYLES,
      skeleton: SKELETON_BUTTON_STYLES,
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default function Button({
  children,
  variant,
  size,
  className,
  type = "submit",
  ...props
}) {
  const BUTTON_STYLES = cn(BUTTON_VARIANTS({ variant, size }), className);

  return (
    <button className={BUTTON_STYLES} type={type} {...props}>
      {children}
    </button>
  );
}

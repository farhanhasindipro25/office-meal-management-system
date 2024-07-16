import { cva } from "class-variance-authority";
import {
  DEFAULT_BUTTON_STYLES,
  PRIMARY_BUTTON_STYLES,
  SECONDARY_BUTTON_STYLES,
} from "../../styles/ui/DisabledButtonStyles";
import { SKELETON_BUTTON_STYLES } from "../../styles/ui/ButtonStyles";
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

export default function DisabledButton({
  children,
  variant,
  size,
  className,
  loading,
  type = "button",
  ...props
}) {
  const BUTTON_STYLES = cn(
    BUTTON_VARIANTS({ variant, size }),
    className ?? "",
    loading ? "cursor-wait" : ""
  );

  return (
    <button className={BUTTON_STYLES} type={type} {...props}>
      {children}
    </button>
  );
}

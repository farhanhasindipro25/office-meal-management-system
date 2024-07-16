import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import cn from "../../utils/cn";
import {
  INPUT_BOX_STYLES,
  INPUT_LABEL_STYLES,
} from "../../styles/ui/TextInputFieldStyles";

export default function PasswordInputField(props) {
  const {
    type = "password",
    name,
    id,
    label,
    placeholder,
    className,
    value,
    onChange,
    onBlur,
    defaultValue,
    ...otherProps
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const INPUT_FIELD_STYLES = cn(INPUT_BOX_STYLES, className ?? "");
  const isRequired = label.includes("*");
  return (
    <div className="space-y-1">
      <label htmlFor={name} className={INPUT_LABEL_STYLES}>
        {isRequired === false ? (
          label
        ) : (
          <div className="flex">
            {label.split("*")[0]}
            <span className="text-red-500">*</span>
          </div>
        )}
      </label>
      <div className="relative">
        <input
          type={`${showPassword ? "text" : type}`}
          id={id}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={INPUT_FIELD_STYLES}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...otherProps}
        />
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="cursor-pointer"
        >
          {showPassword ? (
            <EyeSlashIcon className="absolute right-3 top-3 h-5 w-5 text-indigo-400" />
          ) : (
            <EyeIcon className="absolute right-3 top-3 h-5 w-5 text-indigo-400" />
          )}
        </div>
      </div>
    </div>
  );
}

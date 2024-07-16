import {
  INPUT_BOX_STYLES,
  INPUT_LABEL_STYLES,
} from "../../styles/ui/TextInputFieldStyles";
import cn from "../../utils/cn";

export default function TextInputField(props) {
  const {
    type = "text",
    name,
    id,
    label,
    placeholder,
    className,
    value,
    onChange,
    defaultValue,
  } = props;

  const INPUT_FIELD_STYLES = cn(INPUT_BOX_STYLES, className);
  const isRequired = label.includes("*");
  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={id} className={INPUT_LABEL_STYLES}>
        {isRequired === false ? (
          label
        ) : (
          <div className="flex">
            {label.split("*")[0]}
            <span className="text-red-500">*</span>
          </div>
        )}
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        id={id}
        name={name}
        placeholder={placeholder}
        className={INPUT_FIELD_STYLES}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

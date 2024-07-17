import {
  DATE_BOX_STYLES,
  DATE_LABEL_STYLES,
} from "../../styles/ui/DateSelectorFieldStyles";
import cn from "../../utils/cn";

export default function DateSelectorInputField(props) {
  const { label, name, id, value, onChange, ...otherProps } = props;
  const DATE_FIELD_STYLES = cn(DATE_BOX_STYLES);
  const today = new Date().toISOString().split("T")[0];
  const isRequired = label.includes("*");
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className={DATE_LABEL_STYLES}>
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
        type="date"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={DATE_FIELD_STYLES}
        min={today}
        {...otherProps}
      />
    </div>
  );
}

import { CHECKBOX_STYLES } from "../../styles/ui/CheckboxFieldStyles";

export default function CheckBoxInputField(props) {
  const { name, id, label, onClick, checked, onChange, onBlur } = props;
  return (
    <div className="flex items-center gap-2">
      <input
        onChange={onChange}
        onBlur={onBlur}
        checked={checked}
        onClick={onClick}
        type="checkbox"
        name={name}
        id={id}
        className={CHECKBOX_STYLES}
      />

      <label
        className="cursor-pointer text-sm font-medium text-gray-700"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

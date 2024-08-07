import Select from "react-select";
import {
  customStyles,
  SELECT_LABEL_STYLES,
} from "../../styles/ui/SelectFieldStyles";

export default function SelectField(props) {
  const {
    label,
    name,
    id,
    defaultValue,
    options,
    onChange,
    placeholder,
    value,
    isMulti = false,
    isClearable = false,
  } = props;
  const isRequired = label.includes("*");
  return (
    <div
      className="flex flex-col w-full gap-1"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <label htmlFor={id} className={SELECT_LABEL_STYLES}>
        {isRequired === false ? (
          label
        ) : (
          <div className="flex">
            {label.split("*")[0]}
            <span className="text-red-500">*</span>
          </div>
        )}
      </label>

      <Select
        name={name}
        id={id}
        value={value}
        styles={customStyles}
        classNamePrefix="select2-selection"
        placeholder={placeholder}
        options={options}
        noOptionsMessage={() => "No options"}
        isMulti={isMulti}
        onChange={onChange}
        isClearable={isClearable}
        defaultValue={defaultValue}
        {...props}
      />
    </div>
  );
}

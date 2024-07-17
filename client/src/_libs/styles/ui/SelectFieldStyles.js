export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? "#4f46e5" : provided.borderColor,
    boxShadow: state.isFocused ? "0 0 0 2px #818cf8" : provided.boxShadow,
    border: state.isFocused ? "none" : provided.border,
    paddingTop: "3px",
    paddingBottom: "5px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor:
      (state.isFocused || state.isSelected) && !state.isMulti
        ? "#6366f1"
        : provided.backgroundColor,
    color:
      (state.isFocused || state.isSelected) && !state.isMulti
        ? "#ffffff"
        : "#1a202c",
    "&:hover": {
      backgroundColor: "#818cf8",
      color: "#ffffff",
      cursor: "pointer",
    },
    overflow: "hidden",
    fontSize: "14px",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#1a202c",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#ffffff",
  }),
  input: (provided) => ({
    ...provided,
    "&:focus": {
      boxShadow: "none",
    },
  }),
};

export const SELECT_LABEL_STYLES =
  "appearance-none block text-sm font-medium text-neutral-700";

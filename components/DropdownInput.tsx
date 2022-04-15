import type { FC } from "react";
import type { SelectProps } from "../types";

const DropdownInput: FC<SelectProps> = ({
  htmlFor,
  label,
  name,
  id,
  options,
  required = true,
  onChange
}: SelectProps) => {
  return (
    <div className="form-group col-md-2">
      <label htmlFor={htmlFor}>{label}</label>
      <select
        className="form-control"
        name={name}
        id={id}
        onChange={onChange}
        required={required}>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value === 0 ? "" : option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownInput;

import type { FC } from "react";
import type { SelectProps } from "../types";

const DropdownInput: FC<SelectProps> = ({
  htmlFor,
  label,
  name,
  id,
  options,
  onChange
}: SelectProps) => {
  return (
    <div className="form-group col-md-2">
      <label htmlFor={htmlFor}>{label}</label>
      <select className="form-control" name={name} id={id} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownInput;

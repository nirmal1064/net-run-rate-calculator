import type { FC } from "react";
import type { InputProps } from "../types";

const CustomInput: FC<InputProps> = ({
  className = "form-group col-md-2",
  htmlFor,
  label,
  type,
  name,
  id,
  placeholder = "",
  onChange
}: InputProps) => {
  return (
    <div className={className}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        className="form-control"
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;

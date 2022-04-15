import type { FC } from "react";
import type { NumberInputProps } from "../types";

const NumberInput: FC<NumberInputProps> = ({
  className = "form-group col-md-2",
  htmlFor,
  label,
  name,
  id,
  step,
  placeholder = "",
  onChange
}: NumberInputProps) => {
  return (
    <div className={className}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type="number"
        step={step}
        className="form-control"
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default NumberInput;

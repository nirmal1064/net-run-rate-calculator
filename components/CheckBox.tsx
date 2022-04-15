import type { FC } from "react";
import { CheckBoxProps } from "../types";

const CheckBox: FC<CheckBoxProps> = ({
  className = "form-group",
  htmlFor,
  label,
  name,
  id,
  onChange
}) => {
  return (
    <div className={className}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type="checkbox"
        className="form-control"
        name={name}
        id={id}
        onChange={onChange}
      />
    </div>
  );
};

export default CheckBox;

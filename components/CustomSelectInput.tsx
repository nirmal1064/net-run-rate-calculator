import { Center, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { ChangeEvent, FC } from "react";
import { Option } from "../types";

type Props = {
  htmlFor: string;
  label: string;
  placeholder: string;
  options: Option[];
  isRequired?: boolean;
  id: string;
  name?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

const CustomSelectInput: FC<Props> = ({
  htmlFor,
  label,
  placeholder,
  options,
  id,
  name,
  isRequired = true,
  onChange
}: Props) => {
  return (
    <FormControl>
      <Center>
        <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      </Center>
      <Select
        id={id}
        name={name ? name : id}
        placeholder={placeholder}
        onChange={onChange}
        isRequired={isRequired}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelectInput;

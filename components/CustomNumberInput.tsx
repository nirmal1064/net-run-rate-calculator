import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from "@chakra-ui/react";
import { ChangeEvent, FC } from "react";

type NumberProps = {
  htmlFor: string;
  label: string;
  id: string;
  step: number;
  isRequired?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

const CustomNumberInput: FC<NumberProps> = ({
  htmlFor,
  label,
  id,
  step,
  isRequired = true,
  onChange
}: NumberProps) => {
  return (
    <FormControl>
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      <NumberInput id={id} name={id} step={step} isRequired={isRequired}>
        <NumberInputField type={"number"} onChange={onChange} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormErrorMessage></FormErrorMessage>
    </FormControl>
  );
};

export default CustomNumberInput;

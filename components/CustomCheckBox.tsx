import { Checkbox, FormControl, FormLabel } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  htmlFor: string;
  label: string;
  id: string;
  name: string;
};

const CustomCheckBox: FC<Props> = ({ htmlFor, label, id, name }: Props) => {
  return (
    <FormControl>
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      <Checkbox id={id} name={name} />
    </FormControl>
  );
};

export default CustomCheckBox;

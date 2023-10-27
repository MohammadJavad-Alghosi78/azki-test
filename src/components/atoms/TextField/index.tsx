// node_modules
import { FC } from "react";
// types
import { ITextFieldProps } from "./types";
// styles
import { StyledTextField } from "./styled";

const TextField: FC<ITextFieldProps> = (props) => {
  return <StyledTextField {...props} />;
};

export default TextField;

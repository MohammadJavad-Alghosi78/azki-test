// node_modules
import { ForwardRefRenderFunction, forwardRef } from "react";
// components
import Typography from "../Typography";
// types
import { ITextFieldProps } from "./types";
// theme
import theme from "../../../theme";
// styles
import { StyledTextField, TextFieldWrapper } from "./styled";

const TextField: ForwardRefRenderFunction<unknown, ITextFieldProps> = (
  props,
  ref
) => {
  const { errormessage, ...rest } = props;
  return (
    <TextFieldWrapper>
      <StyledTextField
        {...rest}
        errormessage={errormessage}
        autoComplete="off"
      />
      {errormessage && (
        <Typography variant="caption" color={theme.colors.red}>
          {errormessage ?? ""}
        </Typography>
      )}
    </TextFieldWrapper>
  );
};

export default forwardRef(TextField);

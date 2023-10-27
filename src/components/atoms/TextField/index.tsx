// node_modules
import { FC } from "react";
// types
import { ITextFieldProps } from "./types";
// styles
import { StyledTextField, TextFieldWrapper } from "./styled";
import Typography from "../Typography";
import theme from "../../../theme";

const TextField: FC<ITextFieldProps> = (props) => {
  const { errorMessage, ...rest } = props;
  return (
    <TextFieldWrapper>
      <StyledTextField
        {...rest}
        autoComplete="off"
        errorMessage={errorMessage}
      />
      {errorMessage && (
        <Typography variant="caption" color={theme.colors.red}>
          {errorMessage}
        </Typography>
      )}
    </TextFieldWrapper>
  );
};

export default TextField;

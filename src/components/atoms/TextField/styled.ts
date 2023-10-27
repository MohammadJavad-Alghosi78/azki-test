// node_modules
import styled from "styled-components";
import { ITextFieldProps } from "./types";

export const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const StyledTextField = styled.input<ITextFieldProps>(
  ({ theme, errorMessage }) => ({
    padding: "0.25rem",
    fontSize: "12px",
    fontWeight: "500",
    outline: "none",
    transition: "border 0.4s",
    borderRadius: "5px",
    border: `1px solid ${
      !!errorMessage ? theme.colors.red : theme.colors.gray
    }`,
    "&:focus, &:hover": {
      border: `1px solid ${theme.colors.black}`,
    },
    "&::placeholder": {
      color: theme.colors.gray,
      fontSize: "12px",
    },
  })
);

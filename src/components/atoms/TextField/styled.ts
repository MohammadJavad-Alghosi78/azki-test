// node_modules
import styled from "styled-components";
// types
import { ITextFieldProps } from "./types";

export const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  height: 52px;
`;

export const StyledTextField = styled.input<ITextFieldProps>(
  ({ theme, errormessage }) => ({
    boxSizing: "border-box",
    height: "48px",
    padding: "0.5rem",
    fontSize: "18px",
    fontWeight: "500",
    outline: "none",
    transition: "border 0.4s",
    borderRadius: "5px",
    border: `1px solid ${
      !!errormessage ? theme.colors.red : theme.colors.gray
    }`,
    "&:focus, &:hover": {
      border: `1px solid ${
        !!errormessage ? theme.colors.red : theme.colors.black
      }`,
    },
    "&::placeholder": {
      color: theme.colors.gray,
      fontSize: "18px",
    },
  })
);

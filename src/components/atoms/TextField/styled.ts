// node_modules
import styled from "styled-components";

export const StyledTextField = styled.input(({ theme }) => ({
  padding: "0.25rem",
  outline: "none",
  transition: "border 0.4s",
  borderRadius: "5px",
  border: `1px solid ${theme.colors.gray}`,
  "&:focus, &:hover": {
    border: `1px solid ${theme.colors.black}`,
  },
  "&::placeholder": {
    color: theme.colors.gray,
  },
}));

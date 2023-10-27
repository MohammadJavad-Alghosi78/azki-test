// node_modules
import styled, { DefaultTheme } from "styled-components";
// types
import { ButtonVariants, IButtonProps } from "./types";

const handleVariantStyles = (theme: DefaultTheme, variant: ButtonVariants) => {
  if (variant === "contained") {
    return {
      color: theme.colors.white,
      backgroundColor: theme.colors.green,
      border: "none",
    };
  }
  return {
    color: theme.colors.green,
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.gray}`,
  };
};

export const StyledButton = styled.button<IButtonProps>(
  ({ theme, disabled, variant }) => ({
    borderRadius: "15px",
    cursor: disabled ? "not-allowed" : "pointer",
    padding: "0.5rem",
    fontSize: "12px",
    ...handleVariantStyles(theme, variant),
  })
);

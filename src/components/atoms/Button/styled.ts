// node_modules
import styled, { DefaultTheme } from "styled-components";
// types
import { ButtonVariants, IButtonProps } from "./types";

const handleVariantStyles = (
  theme: DefaultTheme,
  variant: ButtonVariants,
  disabled?: boolean
) => {
  if (variant === "contained") {
    return {
      color: theme.colors.white,
      backgroundColor: disabled ? theme.colors.gray : theme.colors.green,
      border: "none",
    };
  }
  return {
    color: theme.colors.green,
    backgroundColor: disabled ? theme.colors.gray : theme.colors.white,
    border: `1px solid ${theme.colors.green}`,
  };
};

export const StyledButton = styled.button<IButtonProps>(
  ({ theme, disabled, variant }) => ({
    borderRadius: "10px",
    minWidth: "130px",
    cursor: disabled ? "not-allowed" : "pointer",
    padding: "0.5rem",
    fontSize: "12px",
    ...handleVariantStyles(theme, variant, disabled),
  })
);

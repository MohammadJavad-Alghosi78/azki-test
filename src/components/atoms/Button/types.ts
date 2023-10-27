// node_modules
import { CSSProperties, HTMLAttributes, ReactNode } from "react";

type DefaultHtmlButtonTypes = HTMLAttributes<HTMLButtonElement>

export type ButtonVariants = "contained" | "outlined";

export interface IButtonProps extends DefaultHtmlButtonTypes {
  variant: ButtonVariants;
  disabled?: boolean;
  loading?: boolean;
  styles?: CSSProperties;
  children: ReactNode;
  fullWidth?: boolean;
}

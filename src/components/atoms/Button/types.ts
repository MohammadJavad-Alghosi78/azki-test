// node_modules
import {
  CSSProperties,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

type DefaultHtmlButtonTypes = HTMLAttributes<HTMLButtonElement>;

export type ButtonVariants = "contained" | "outlined";

export interface IButtonProps extends DefaultHtmlButtonTypes {
  variant: ButtonVariants;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
  styles?: CSSProperties;
  children: ReactNode;
  fullWidth?: boolean;
}

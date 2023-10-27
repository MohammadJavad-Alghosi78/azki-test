// node_modules
import { ChangeEvent, HTMLAttributes } from "react";

export interface ITextFieldProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type?: "text" | "number" | "password";
  name?: string;
  className?: string;
  errorMessage?: string;
}

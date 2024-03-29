// node_modules
import { ChangeEvent, HTMLAttributes } from "react";

export interface ISelectOption {
  value: string;
  title: string;
}

export interface ISelectProps extends HTMLAttributes<HTMLSelectElement> {
  value: string;
  options: Array<ISelectOption>;
  disabled?: boolean;
  hasError?: boolean;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  label: string;
}

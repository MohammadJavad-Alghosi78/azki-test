import { ChangeEvent, HTMLAttributes } from "react";

export interface ISelectOption {
  value: string | number;
  title: string;
}

export interface ISelectProps extends HTMLAttributes<HTMLSelectElement> {
  options: Array<ISelectOption>;
  disabled?: boolean;
  hasError?: boolean;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  label: string;
}

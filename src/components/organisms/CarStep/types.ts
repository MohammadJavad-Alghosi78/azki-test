// node_modules
import { ChangeEvent } from "react";
// types
import { ISelectOption } from "../../atoms/Select/types";

export interface ICarStep {
  carModelOptions: Array<ISelectOption>;
  onCarModelChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  carTypes: Array<ISelectOption>;
  onCarTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

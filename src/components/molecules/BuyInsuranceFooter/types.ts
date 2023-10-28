// node_modules
import { Dispatch, MouseEventHandler, SetStateAction } from "react";
// constants
import { ESteps } from "../../templates/BuyInsurance/constants";

export interface IBuyInsuranceFooterPropsType {
  currentStep: ESteps;
  onCurrentStepChange: Dispatch<SetStateAction<ESteps>>;
  onSubmit: MouseEventHandler<HTMLButtonElement>;
  isNextButtonDisabled?: boolean;
}

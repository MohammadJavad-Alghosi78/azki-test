import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { ESteps } from "../../templates/BuyInsurance/constants";
import { SubmitHandler } from "react-hook-form";

export interface IBuyInsuranceFooterPropsType {
  currentStep: ESteps;
  onCurrentStepChange: Dispatch<SetStateAction<ESteps>>;
  onSubmit: MouseEventHandler<HTMLButtonElement>;
}

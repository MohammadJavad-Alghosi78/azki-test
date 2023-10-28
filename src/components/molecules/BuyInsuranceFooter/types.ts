import { Dispatch, SetStateAction } from "react";
import { ESteps } from "../../templates/BuyInsurance/constants";

export interface IBuyInsuranceFooterPropsType {
  currentStep: ESteps;
  onCurrentStepChange: Dispatch<SetStateAction<ESteps>>;
  onSubmit: Function;
}

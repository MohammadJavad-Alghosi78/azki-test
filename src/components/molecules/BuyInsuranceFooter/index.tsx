import { Dispatch, FC, SetStateAction } from "react";
import { StyledWrapper } from "./styled";
import { Button, Flex } from "../../atoms";
import { persianWords } from "../../../translation";
import { ESteps } from "../../templates/BuyInsurance/constants";

interface IBuyInsuranceFooterPropsType {
  currentStep: ESteps;
  onCurrentStepChange: Dispatch<SetStateAction<ESteps>>;
  onSubmit: Function;
}

const BuyInsuranceFooter: FC<IBuyInsuranceFooterPropsType> = (props) => {
  const { currentStep, onCurrentStepChange } = props;

  const {
    shared: { previousStep, nextStep },
    inquiry: { callForPrice },
  } = persianWords;

  const handleStep = (id: "prev" | "next") => {
    if (id === "prev") {
      if (currentStep === ESteps.COMPANY) onCurrentStepChange(ESteps.CAR);
      else onCurrentStepChange(ESteps.INSURANCE_TYPE);
    } else {
      if (currentStep === ESteps.CAR) onCurrentStepChange(ESteps.COMPANY);
      else onCurrentStepChange(ESteps.DISCOUNTS);
    }
  };

  if (currentStep === ESteps.DISCOUNTS) {
    return (
      <Flex justifyContent="end">
        <Button variant="contained">{callForPrice}</Button>
      </Flex>
    );
  }
  return (
    <StyledWrapper>
      <Button variant="outlined" onClick={() => handleStep("prev")}>
        {previousStep}
      </Button>
      <Button variant="outlined" onClick={() => handleStep("next")}>
        {nextStep}
      </Button>
    </StyledWrapper>
  );
};

export default BuyInsuranceFooter;

// node_modules
import { FC } from "react";
// components
import { Button, Flex } from "../../atoms";
// constants
import { ESteps } from "../../templates/BuyInsurance/constants";
// types
import { IBuyInsuranceFooterPropsType } from "./types";
// translations
import { persianWords } from "../../../translation";

const BuyInsuranceFooter: FC<IBuyInsuranceFooterPropsType> = (props) => {
  const { currentStep, onCurrentStepChange, onSubmit, isNextButtonDisabled } =
    props;

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

  if (currentStep === ESteps.INSURANCE_TYPE) return null;

  if (currentStep === ESteps.DISCOUNTS) {
    return (
      <Flex justifycontent="end" smwidth="100%" width="50%">
        <Button
          variant="contained"
          onClick={onSubmit}
          disabled={isNextButtonDisabled}
        >
          {callForPrice}
        </Button>
      </Flex>
    );
  }
  return (
    <Flex
      smjustifycontent="space-between"
      alignitems="center"
      smflexdirection="row"
      smwidth="100%"
      width="50%"
    >
      <Button variant="outlined" onClick={() => handleStep("prev")}>
        {previousStep}
      </Button>
      <Button
        variant="outlined"
        onClick={() => handleStep("next")}
        disabled={isNextButtonDisabled}
      >
        {nextStep}
      </Button>
    </Flex>
  );
};

export default BuyInsuranceFooter;

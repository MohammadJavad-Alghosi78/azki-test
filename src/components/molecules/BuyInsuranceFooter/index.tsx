// node_modules
import { FC, useContext } from "react";
// components
import { Button, Flex } from "../../atoms";
// constants
import { ESteps } from "../../templates/BuyInsurance/constants";
// context
import { CallToPriceContext } from "../../../context";
// types
import { IBuyInsuranceFooterPropsType } from "./types";
// translations
import { persianWords } from "../../../translation";
// styles
import { BackIcon, ForwardIcon } from "./styled";

const BuyInsuranceFooter: FC<IBuyInsuranceFooterPropsType> = (props) => {
  const { currentStep, onCurrentStepChange, onSubmit, isNextButtonDisabled } =
    props;
  const { onCarModelChange, onCarTypeChange } = useContext(CallToPriceContext);

  const {
    shared: { previousStep, nextStep },
    inquiry: { callForPrice },
  } = persianWords;

  const handleStep = (id: "prev" | "next") => {
    if (id === "prev") {
      if (currentStep === ESteps.COMPANY) onCurrentStepChange(ESteps.CAR);
      else {
        onCurrentStepChange(ESteps.INSURANCE_TYPE);
        onCarModelChange("");
        onCarTypeChange("");
      }
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
        <Flex smalignitems="center" smflexdirection="row">
          <BackIcon src="/icons/arrow.svg" alt="" width={12} height={12} />
          {previousStep}
        </Flex>
      </Button>
      <Button
        variant="outlined"
        onClick={() => handleStep("next")}
        disabled={isNextButtonDisabled}
      >
        <Flex
          smalignitems="center"
          smjustifycontent="center"
          smwidth="100%"
          smflexdirection="row"
        >
          {nextStep}
          <ForwardIcon src="/icons/arrow.svg" alt="" width={12} height={12} />
        </Flex>
      </Button>
    </Flex>
  );
};

export default BuyInsuranceFooter;

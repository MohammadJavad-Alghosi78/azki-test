import { FC, useContext, useState } from "react";
import { StyledWrapper } from "./styled";
import { Typography } from "../../atoms";
import { CallToPriceContext } from "../../../context";
import { persianWords } from "../../../translation";
import { BuyInsuranceFooter } from "../../molecules";
import { ESteps } from "./constants";
import {
  CarStep,
  CompanyStep,
  DiscountStep,
  ChooseInsuranceStep,
} from "../../organisms";

const BuyInsurance: FC = (props) => {
  const { insuranceType } = useContext(CallToPriceContext);
  const { chooseInsurance, thirdPartyInsurance } = persianWords.inquiry;
  const [currentStep, setCurrentStep] = useState<ESteps>(ESteps.CAR);

  const handleSubmit = () => {
    console.log("Submitted !!!");
  };

  const handleShowComponent = () => {
    switch (currentStep) {
      case ESteps.INSURANCE_TYPE:
        return <ChooseInsuranceStep />;
      case ESteps.CAR:
        return <CarStep />;
      case ESteps.COMPANY:
        return <CompanyStep />;
      case ESteps.DISCOUNTS:
        return <DiscountStep />;
    }
  };
  return (
    <StyledWrapper>
      <Typography variant="heading">
        {insuranceType === "thirdPartyInsurance"
          ? chooseInsurance
          : thirdPartyInsurance}
      </Typography>
      {handleShowComponent()}
      <BuyInsuranceFooter
        currentStep={currentStep}
        onCurrentStepChange={(s) => setCurrentStep(s)}
        onSubmit={handleSubmit}
      />
    </StyledWrapper>
  );
};

export default BuyInsurance;

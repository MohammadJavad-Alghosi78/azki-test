import { FC, useContext, useState } from "react";
import { StyledWrapper } from "./styled";
import { Typography } from "../../atoms";
import { CallToPriceContext } from "../../../context";
import { persianWords } from "../../../translation";
import { BuyInsuranceFooter } from "../../molecules";
import { ESteps } from "./constants";
import { ChooseInsuranceStep } from "../../organisms";
import CarStepContainer from "../../organisms/CarStep/CarStepContainer";
import CompanyStepContainer from "../../organisms/CompanyStep/CompanyStepContainer";
import DiscountStepContainer from "../../organisms/DiscountStep/DiscountStepContainer";

interface IBuyInsrance {
  onSubmit: Function;
}

const BuyInsurance: FC<IBuyInsrance> = ({ onSubmit }) => {
  const { insuranceType } = useContext(CallToPriceContext);
  const { chooseInsurance, thirdPartyInsurance } = persianWords.inquiry;
  const [currentStep, setCurrentStep] = useState<ESteps>(ESteps.DISCOUNTS);

  const handleShowComponent = () => {
    switch (currentStep) {
      case ESteps.INSURANCE_TYPE:
        return (
          <ChooseInsuranceStep
            onChangeStep={() => setCurrentStep(ESteps.CAR)}
          />
        );
      case ESteps.CAR:
        return <CarStepContainer />;
      case ESteps.COMPANY:
        return <CompanyStepContainer />;
      case ESteps.DISCOUNTS:
        return <DiscountStepContainer />;
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
        onSubmit={onSubmit}
      />
    </StyledWrapper>
  );
};

export default BuyInsurance;

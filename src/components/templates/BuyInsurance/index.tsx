// node_modules
import { FC, MouseEventHandler, useContext, useState } from "react";
// components
import { Flex, Typography } from "../../atoms";
import { BuyInsuranceFooter } from "../../molecules";
import { ChooseInsuranceStep } from "../../organisms";
import CarStepContainer from "../../organisms/CarStep/CarStepContainer";
import CompanyStepContainer from "../../organisms/CompanyStep/CompanyStepContainer";
import DiscountStepContainer from "../../organisms/DiscountStep/DiscountStepContainer";
// context
import { CallToPriceContext } from "../../../context";
// translations
import { persianWords } from "../../../translation";
// constants
import { ESteps } from "./constants";

interface IBuyInsrance {
  onSubmit: MouseEventHandler<HTMLButtonElement>;
}

const BuyInsurance: FC<IBuyInsrance> = ({ onSubmit }) => {
  const {
    insuranceType,
    carModel,
    carType,
    previousInsuranceCompany,
    discountPercentageDriverAccidents,
    discountPercentageThirdInsurance,
  } = useContext(CallToPriceContext);

  const { chooseInsurance, thirdPartyInsurance } = persianWords.inquiry;
  const [currentStep, setCurrentStep] = useState<ESteps>(ESteps.INSURANCE_TYPE);

  const isNextButtonDisabled = {
    [ESteps.INSURANCE_TYPE]: !insuranceType,
    [ESteps.CAR]: !carModel || !carType,
    [ESteps.COMPANY]: !previousInsuranceCompany,
    [ESteps.DISCOUNTS]:
      !discountPercentageDriverAccidents || !discountPercentageThirdInsurance,
  };

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
    <Flex
      smflexdirection="column"
      smjustifycontent="center"
      smalignitems="flex-start"
      smgap="50px"
    >
      <Typography variant="heading">
        {currentStep === ESteps.INSURANCE_TYPE
          ? chooseInsurance
          : thirdPartyInsurance}
      </Typography>
      {handleShowComponent()}
      <BuyInsuranceFooter
        currentStep={currentStep}
        onCurrentStepChange={(s) => setCurrentStep(s)}
        onSubmit={onSubmit}
        isNextButtonDisabled={isNextButtonDisabled[currentStep]}
      />
    </Flex>
  );
};

export default BuyInsurance;

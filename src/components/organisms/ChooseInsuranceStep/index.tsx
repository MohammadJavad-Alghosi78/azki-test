import { FC } from "react";
import { Flex } from "../../atoms";
import { InsuranceCard } from "../../molecules";
import { persianWords } from "../../../translation";
import { IChooseInsuranceStep } from "./types";

const ChooseInsuranceStep: FC<IChooseInsuranceStep> = (props) => {
  return (
    <Flex gap={8}>
      <InsuranceCard
        title={persianWords.insuranceTypes.thirdParty}
        imageSrc="/icons/insurance.svg"
        onClick={props.onChangeStep}
      />
      <InsuranceCard
        title={persianWords.insuranceTypes.body}
        imageSrc="/icons/insurance.svg"
        disabled
      />
    </Flex>
  );
};

export default ChooseInsuranceStep;

// node_modules
import { FC } from "react";
// components
import { Flex } from "../../atoms";
import { InsuranceCard } from "../../molecules";
// translations
import { persianWords } from "../../../translation";
// types
import { IChooseInsuranceStep } from "./types";

const ChooseInsuranceStep: FC<IChooseInsuranceStep> = (props) => {
  return (
    <Flex smflexdirection="row" smwidth="100%" width="50%" smgap={8}>
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

import { FC } from "react";
import BuyInsurance from ".";

const BuyInsuranceContainer: FC = () => {
  const handleSubmit = () => {
    console.log("A modal should be shown here");
  };
  return <BuyInsurance onSubmit={handleSubmit} />;
};

export default BuyInsuranceContainer;

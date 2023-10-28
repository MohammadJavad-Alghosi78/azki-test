import { FC } from "react";
import DiscountStep from ".";
import { useGetDiscounts } from "../../../hooks";

const DiscountStepContainer: FC<any> = () => {
  const { data } = useGetDiscounts();
  return <DiscountStep discounts={data} />;
};

export default DiscountStepContainer;

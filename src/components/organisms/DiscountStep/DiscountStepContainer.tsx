// node_modules
import { FC } from "react";
// components
import DiscountStep from ".";
// hooks
import { useGetDiscounts } from "../../../hooks";

const DiscountStepContainer: FC = () => {
  const { data } = useGetDiscounts();
  return <DiscountStep discounts={data} />;
};

export default DiscountStepContainer;

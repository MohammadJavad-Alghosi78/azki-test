import { FC } from "react";
import { persianWords } from "../../../translation";
import { Flex, Select, Typography } from "../../atoms";
import theme from "../../../theme";
import { IDiscounts } from "../../../services/InsuranceTypes/types";

interface IDiscountStep {
  discounts: Array<IDiscounts>;
}

const DiscountStep: FC<IDiscountStep> = ({ discounts }) => {
  const {
    chooseDiscountPercentageThirdInsuranceAndDriverAccidents,
    discountPercentageThirdInsurance,
    discountPercentageDriverAccidents,
  } = persianWords.inquiry;

  const discountOptions = discounts.map((discount) => ({
    value: discount.title,
    title: discount.title,
  }));

  return (
    <>
      <Typography variant="body" color={theme.colors.lightGray}>
        {chooseDiscountPercentageThirdInsuranceAndDriverAccidents}
      </Typography>
      <Flex justifyContent="space-between" gap="12px">
        <Select
          options={discountOptions}
          label={discountPercentageThirdInsurance}
        />
        <Select
          options={discountOptions}
          label={discountPercentageDriverAccidents}
        />
      </Flex>
    </>
  );
};

export default DiscountStep;

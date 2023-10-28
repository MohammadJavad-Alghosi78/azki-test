import { ChangeEvent, FC, useContext } from "react";
import { persianWords } from "../../../translation";
import { Flex, Select, Typography } from "../../atoms";
import theme from "../../../theme";
import { IDiscounts } from "../../../services/InsuranceTypes/types";
import { CallToPriceContext } from "../../../context";

interface IDiscountStep {
  discounts: Array<IDiscounts>;
}

const DiscountStep: FC<IDiscountStep> = ({ discounts }) => {
  const {
    onDiscountPercentageThirdInsurance,
    onDiscountPercentageDriverAccidents,
  } = useContext(CallToPriceContext);
  const {
    chooseDiscountPercentageThirdInsuranceAndDriverAccidents,
    discountPercentageThirdInsurance,
    discountPercentageDriverAccidents,
  } = persianWords.inquiry;

  const discountOptions = discounts.map((discount) => ({
    value: discount.title,
    title: discount.title,
  }));

  const handleChangethirdInsuranceDiscount = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    onDiscountPercentageThirdInsurance(e.target.value);
  };

  const handleChangeDriverAccidentDiscount = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    onDiscountPercentageDriverAccidents(e.target.value);
  };

  return (
    <>
      <Typography variant="body" color={theme.colors.lightGray}>
        {chooseDiscountPercentageThirdInsuranceAndDriverAccidents}
      </Typography>
      <Flex justifyContent="space-between" gap="12px">
        <Select
          options={discountOptions}
          label={discountPercentageThirdInsurance}
          onChange={handleChangethirdInsuranceDiscount}
        />
        <Select
          options={discountOptions}
          label={discountPercentageDriverAccidents}
          onChange={handleChangeDriverAccidentDiscount}
        />
      </Flex>
    </>
  );
};

export default DiscountStep;

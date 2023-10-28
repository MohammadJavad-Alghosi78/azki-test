// node_modules
import { ChangeEvent, FC, useContext } from "react";
// components
import { Flex, Select, Typography } from "../../atoms";
// context
import { CallToPriceContext } from "../../../context";
// theme
import theme from "../../../theme";
// types
import { IDiscounts } from "../../../services/InsuranceTypes/types";
// translations
import { persianWords } from "../../../translation";

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
      <Flex
        justifycontent="space-between"
        smgap="12px"
        smwidth="100%"
        width="50%"
      >
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

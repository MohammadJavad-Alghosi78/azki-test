import { FC } from "react";
import { persianWords } from "../../../translation";
import { Flex, Select, Typography } from "../../atoms";
import theme from "../../../theme";

const DiscountStep: FC<any> = (props) => {
  const {
    chooseDiscountPercentageThirdInsuranceAndDriverAccidents,
    discountPercentageThirdInsurance,
    discountPercentageDriverAccidents,
  } = persianWords.inquiry;
  return (
    <>
      <Typography variant="body" color={theme.colors.lightGray}>
        {chooseDiscountPercentageThirdInsuranceAndDriverAccidents}
      </Typography>
      <Flex justifyContent="space-between" gap="12px">
        <Select
          options={[{ value: "test", title: "test" }]}
          label={discountPercentageThirdInsurance}
        />
        <Select
          options={[{ value: "test", title: "test" }]}
          label={discountPercentageDriverAccidents}
        />
      </Flex>
    </>
  );
};

export default DiscountStep;

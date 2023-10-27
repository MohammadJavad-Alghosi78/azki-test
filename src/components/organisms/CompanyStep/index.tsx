import { FC } from "react";
import { Flex, Select, Typography } from "../../atoms";
import theme from "../../../theme";
import { persianWords } from "../../../translation";

const CompanyStep: FC<any> = (props) => {
  const { choosePreviousInsuranceCompany, previousInsuranceCompany } =
    persianWords.inquiry;
  return (
    <>
      <Typography variant="body" color={theme.colors.lightGray}>
        {choosePreviousInsuranceCompany}
      </Typography>
      <Flex justifyContent="space-between" gap="12px">
        <Select
          options={[{ value: "test", title: "test" }]}
          label={previousInsuranceCompany}
        />
      </Flex>
    </>
  );
};

export default CompanyStep;

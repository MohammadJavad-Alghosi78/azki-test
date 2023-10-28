import { FC } from "react";
import { Flex, Select, Typography } from "../../atoms";
import theme from "../../../theme";
import { persianWords } from "../../../translation";
import { ICompany } from "../../../services/InsuranceTypes/types";

interface ICompanyStep {
  companies: Array<ICompany>;
}

const CompanyStep: FC<ICompanyStep> = (props) => {
  const { choosePreviousInsuranceCompany, previousInsuranceCompany } =
    persianWords.inquiry;
  const { companies } = props;
  const companiesOptions = companies.map((company) => ({
    title: company.title,
    value: company.title,
  }));
  return (
    <>
      <Typography variant="body" color={theme.colors.lightGray}>
        {choosePreviousInsuranceCompany}
      </Typography>
      <Flex justifyContent="space-between" gap="12px">
        <Select options={companiesOptions} label={previousInsuranceCompany} />
      </Flex>
    </>
  );
};

export default CompanyStep;

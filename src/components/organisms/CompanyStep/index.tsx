// node_modules
import { ChangeEvent, FC, useContext } from "react";
// components
import { Flex, Select, Typography } from "../../atoms";
// context
import { CallToPriceContext } from "../../../context";
// theme
import theme from "../../../theme";
// types
import { ICompany } from "../../../services/InsuranceTypes/types";
// translations
import { persianWords } from "../../../translation";

interface ICompanyStep {
  companies: Array<ICompany>;
}

const CompanyStep: FC<ICompanyStep> = (props) => {
  const { onPreviousInsuranceCompany } = useContext(CallToPriceContext);
  const { choosePreviousInsuranceCompany, previousInsuranceCompany } =
    persianWords.inquiry;

  const { companies } = props;

  const companiesOptions = companies.map((company) => ({
    title: company.title,
    value: company.title,
  }));

  const handleCompanyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onPreviousInsuranceCompany(e.target.value);
  };

  return (
    <>
      <Typography variant="body" color={theme.colors.lightGray}>
        {choosePreviousInsuranceCompany}
      </Typography>
      <Flex
        justifycontent="space-between"
        gap="12px"
        smwidth="100%"
        width="50%"
      >
        <Select
          options={companiesOptions}
          label={previousInsuranceCompany}
          onChange={handleCompanyChange}
        />
      </Flex>
    </>
  );
};

export default CompanyStep;

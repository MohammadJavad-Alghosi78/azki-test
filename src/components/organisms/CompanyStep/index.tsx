import { ChangeEvent, FC, useContext } from "react";
import { Flex, Select, Typography } from "../../atoms";
import theme from "../../../theme";
import { persianWords } from "../../../translation";
import { ICompany } from "../../../services/InsuranceTypes/types";
import { CallToPriceContext } from "../../../context";

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
      <Flex justifyContent="space-between" gap="12px">
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

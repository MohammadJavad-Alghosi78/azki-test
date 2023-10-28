import { FC } from "react";
import CompanyStep from ".";
import useGetInsureCompanies from "../../../hooks/useGetInsureCompanies";

const CompanyStepContainer: FC<any> = (props) => {
  const { data: companies } = useGetInsureCompanies();
  return <CompanyStep companies={companies} />;
};

export default CompanyStepContainer;

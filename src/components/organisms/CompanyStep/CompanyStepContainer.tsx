// node_modules
import { FC } from "react";
// components
import CompanyStep from ".";
// hooks
import useGetInsureCompanies from "../../../hooks/requests/useGetInsureCompanies";

const CompanyStepContainer: FC = () => {
  const { data: companies } = useGetInsureCompanies();
  return <CompanyStep companies={companies} />;
};

export default CompanyStepContainer;

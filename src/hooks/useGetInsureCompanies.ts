import { useEffect, useState } from "react";
import { InsuranceTypesServices } from "../services";
import { ICompany } from "../services/InsuranceTypes/types";

const useGetInsureCompanies = () => {
  const [data, setData] = useState<Array<ICompany>>([]);

  useEffect(() => {
    (async () => {
      const { data } = await InsuranceTypesServices.getInsureCompanies();
      setData(data);
    })();
  }, []);

  return { data };
};

export default useGetInsureCompanies;

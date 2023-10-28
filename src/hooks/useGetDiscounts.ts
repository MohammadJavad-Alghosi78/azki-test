// node_modules
import { useEffect, useState } from "react";
// services
import { InsuranceTypesServices } from "../services";
// types
import { IDiscounts } from "../services/InsuranceTypes/types";

const useGetDiscounts = () => {
  const [data, setData] = useState<Array<IDiscounts>>([]);

  useEffect(() => {
    (async () => {
      const { data } = await InsuranceTypesServices.getThirdDiscounts();
      setData(data);
    })();
  }, []);

  return { data };
};

export default useGetDiscounts;

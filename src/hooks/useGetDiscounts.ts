import { useEffect, useState } from "react";
import { InsuranceTypesServices } from "../services";
import { IDiscounts } from "../services/InsuranceTypes/types";

const useGetDiscounts = () => {
  const [data, setData] = useState<Array<IDiscounts>>([]);

  useEffect(() => {
    (async () => {
      const { data } = await InsuranceTypesServices.getThirdDiscounts();
      setData(data);
      console.log(data);
    })();
  }, []);

  return { data };
};

export default useGetDiscounts;

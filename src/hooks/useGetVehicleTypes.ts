import { useEffect, useState } from "react";
import { InsuranceTypesServices } from "../services";
import { IVehicleResponse } from "../services/InsuranceTypes/types";

const useGetVehicleTypes = () => {
  const [data, setData] = useState<Array<IVehicleResponse> | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await InsuranceTypesServices.getVehicleTypes();
      setData(data);
    })();
  }, []);

  return { data };
};

export default useGetVehicleTypes;

// node_modules
import { useEffect, useState } from "react";
// services
import { InsuranceTypesServices } from "../services";
// types
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

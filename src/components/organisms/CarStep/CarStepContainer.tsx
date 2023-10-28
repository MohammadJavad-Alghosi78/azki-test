import { FC } from "react";
import CarStep from ".";
import { useGetVehicleTypes } from "../../../hooks";

const CarStepContainer: FC<any> = (props) => {
  const { data: vehicleTypes } = useGetVehicleTypes();

  return <CarStep vehicles={vehicleTypes} />;
};

export default CarStepContainer;

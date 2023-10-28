// node_modules
import { FC } from "react";
// components
import CarStep from ".";
// hooks
import { useGetVehicleTypes } from "../../../hooks";

const CarStepContainer: FC = () => {
  const { data: vehicleTypes } = useGetVehicleTypes();

  return <CarStep vehicles={vehicleTypes} />;
};

export default CarStepContainer;

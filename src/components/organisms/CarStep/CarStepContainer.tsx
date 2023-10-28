// node_modules
import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
// components
import CarStep from ".";
// hooks
import { useGetVehicleTypes } from "../../../hooks";
// context
import { CallToPriceContext } from "../../../context";
// types
import { ISelectOption } from "../../atoms/Select/types";

const CarStepContainer: FC = () => {
  const {
    carModel,
    onCarModelChange: onCarModelChangeContext,
    onCarTypeChange: onCarTypeChangeContext,
  } = useContext(CallToPriceContext);

  const { data: vehicleTypes } = useGetVehicleTypes();

  const [carTypes, setCarTypes] = useState<Array<ISelectOption>>([]);

  const carModelOptions = vehicleTypes?.map((vehicle) => ({
    title: vehicle.title,
    value: vehicle.title,
  }));

  const handleCarModelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value: carModel } = e.target;
    onCarModelChangeContext(carModel);
    onCarTypeChangeContext("");
    const targetModel = vehicleTypes?.find((item) => item.title === carModel);
    const carTypeOptions = targetModel!.usages.map((carType) => ({
      value: carType.title,
      title: carType.title,
    }));
    setCarTypes(carTypeOptions);
  };

  const handleCarTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onCarTypeChangeContext(e.target.value);
  };

  useEffect(() => {
    if (carModel) {
      const targetModel = vehicleTypes?.find((item) => item.title === carModel);
      if (targetModel) {
        const carTypeOptions = targetModel!.usages.map((carType) => ({
          value: carType.title,
          title: carType.title,
        }));
        setCarTypes(carTypeOptions);
      }
    }
  }, [carModel, vehicleTypes]);

  return (
    <CarStep
      carModelOptions={carModelOptions ?? []}
      onCarModelChange={handleCarModelChange}
      carTypes={carTypes}
      onCarTypeChange={handleCarTypeChange}
    />
  );
};

export default CarStepContainer;

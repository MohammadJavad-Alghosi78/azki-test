// node_modules
import { ChangeEvent, FC, useContext, useState } from "react";
// components
import { Flex, Select, Typography } from "../../atoms";
// context
import { CallToPriceContext } from "../../../context";
// theme
import theme from "../../../theme";
// types
import { IVehicleResponse } from "../../../services/InsuranceTypes/types";
import { ISelectOption } from "../../atoms/Select/types";
// translations
import { persianWords } from "../../../translation";

interface ICarStep {
  vehicles: Array<IVehicleResponse> | null;
}

const CarStep: FC<ICarStep> = ({ vehicles }) => {
  const { chooseCarModelAndType, carModel, carType } = persianWords.inquiry;
  const {
    carModel: selectedCarModel,
    onCarModelChange,
    onCarTypeChange,
  } = useContext(CallToPriceContext);

  const [carTypes, setCarTypes] = useState<Array<ISelectOption>>([]);

  const carModelOptions = vehicles?.map((vehicle) => ({
    title: vehicle.title,
    value: vehicle.title,
  }));

  const handleCarModelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value: carModel } = e.target;
    onCarModelChange(carModel);
    const targetModel = vehicles?.find((item) => item.title === carModel);
    const carTypeOptions = targetModel!.usages.map((carType) => ({
      value: carType.title,
      title: carType.title,
    }));
    setCarTypes(carTypeOptions);
  };

  const handleCarTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onCarTypeChange(e.target.value);
  };

  return (
    <>
      <Typography variant="body" color={theme.colors.lightGray}>
        {chooseCarModelAndType}
      </Typography>
      <Flex
        justifycontent="space-between"
        smgap="12px"
        smwidth="100%"
        width="50%"
      >
        <Select
          options={carModelOptions ?? []}
          label={carModel}
          onChange={handleCarModelChange}
        />
        <Select
          options={carTypes ?? []}
          disabled={!selectedCarModel}
          label={carType}
          onChange={handleCarTypeChange}
        />
      </Flex>
    </>
  );
};

export default CarStep;

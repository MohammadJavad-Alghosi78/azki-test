// node_modules
import { FC, useContext } from "react";
// components
import { Flex, Select, Typography } from "../../atoms";
// context
import { CallToPriceContext } from "../../../context";
// theme
import theme from "../../../theme";
// types
import { ICarStep } from "./types";
// translations
import { persianWords } from "../../../translation";

const CarStep: FC<ICarStep> = (props) => {
  const { carModelOptions, onCarModelChange, carTypes, onCarTypeChange } =
    props;
  const { chooseCarModelAndType, carModel, carType } = persianWords.inquiry;
  const { carModel: SelectedCarModel, carType: selectedCarType } =
    useContext(CallToPriceContext);

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
          options={carModelOptions}
          label={carModel}
          onChange={onCarModelChange}
          value={SelectedCarModel}
        />
        <Select
          options={carTypes ?? []}
          disabled={!SelectedCarModel}
          label={carType}
          onChange={onCarTypeChange}
          value={selectedCarType}
        />
      </Flex>
    </>
  );
};

export default CarStep;

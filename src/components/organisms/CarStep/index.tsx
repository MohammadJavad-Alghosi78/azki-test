import { FC } from "react";
import theme from "../../../theme";
import { Flex, Select, Typography } from "../../atoms";
import { persianWords } from "../../../translation";

const CarStep: FC<any> = (props) => {
  const { chooseCarModelAndType, carModel, carType } = persianWords.inquiry;
  return (
    <>
      <Typography variant="body" color={theme.colors.lightGray}>
        {chooseCarModelAndType}
      </Typography>
      <Flex justifyContent="space-between" gap="12px">
        <Select options={[{ value: "test", title: "test" }]} label={carModel} />
        <Select options={[{ value: "test", title: "test" }]} label={carType} />
      </Flex>
    </>
  );
};

export default CarStep;

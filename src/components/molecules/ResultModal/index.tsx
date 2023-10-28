// node_modules
import { FC } from "react";
// components
import { Flex, Typography } from "../../atoms";
// translations
import { persianWords } from "../../../translation";

interface IResultModal {
  data: Array<Array<string>>;
}

const ResultModal: FC<IResultModal> = (props) => {
  const { data } = props;
  const relatedStrings = persianWords.inquiry;

  return (
    <Flex smflexdirection="column" smgap="12px">
      {data.map((item: Array<string>) => (
        <Flex
          key={`${item[0]}_${item[1]}`}
          smflexdirection="row"
          smjustifycontent="space-between"
          smalignitems="center"
          width="100%"
        >
          <Typography variant="caption">
            {relatedStrings[item[0] as keyof typeof relatedStrings]}:
          </Typography>
          <Typography variant="caption">
            {item[0] === "insuranceType"
              ? relatedStrings[item[1] as keyof typeof relatedStrings]
              : item[1]}
          </Typography>
        </Flex>
      ))}
    </Flex>
  );
};

export default ResultModal;

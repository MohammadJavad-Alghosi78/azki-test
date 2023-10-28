import { FC } from "react";
import { StyledItemWrapper, StyledWrapper } from "./styled";
import { Typography } from "../../atoms";
import { persianWords } from "../../../translation";

interface IResultModal {
  data: Array<Array<string>>;
}

const ResultModal: FC<IResultModal> = (props) => {
  const { data } = props;
  const relatedStrings = persianWords.inquiry;
  return (
    <StyledWrapper>
      {data.map((item: Array<string>) => (
        <StyledItemWrapper>
          <Typography variant="caption">
            {relatedStrings[item[0] as keyof typeof relatedStrings]}:
          </Typography>
          <Typography variant="caption">
            {item[0] === "insuranceType"
              ? relatedStrings[item[1] as keyof typeof relatedStrings]
              : item[1]}
          </Typography>
        </StyledItemWrapper>
      ))}
    </StyledWrapper>
  );
};

export default ResultModal;

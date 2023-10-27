import { FC } from "react";
import { Typography } from "../../atoms";
import { IPersonDetails } from "./types";
import { StyledWrapper } from "./styled";

const PersonDetails: FC<IPersonDetails> = (props) => {
  const { firstName, lastName } = props;
  return (
    <StyledWrapper>
      <img src="/icons/user.svg" alt="user" width={12} height={12} />
      <Typography variant="caption">
        {firstName} {lastName}
      </Typography>
    </StyledWrapper>
  );
};

export default PersonDetails;

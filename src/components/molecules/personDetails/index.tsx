// node_modules
import { FC } from "react";
// components
import { Flex, Typography } from "../../atoms";
// types
import { IPersonDetails } from "./types";

const PersonDetails: FC<IPersonDetails> = (props) => {
  const { firstName, lastName } = props;
  return (
    <Flex smflexdirection="row" smalignitems="center" smgap="4px">
      <img src="/icons/user.svg" alt="user" width={12} height={12} />
      <Typography variant="caption">
        {firstName} {lastName}
      </Typography>
    </Flex>
  );
};

export default PersonDetails;

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
      <img src="/icons/user.svg" alt="user" width={24} height={24} />
      <Typography variant="body">
        {firstName} {lastName}
      </Typography>
    </Flex>
  );
};

export default PersonDetails;

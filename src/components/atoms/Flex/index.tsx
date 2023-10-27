import { FC } from "react";
import { IFlex } from "./types";
import { StyledWrapper } from "./styled";

const Flex: FC<IFlex> = (props) => {
  const { children, ...rest } = props;
  return <StyledWrapper {...rest}>{children}</StyledWrapper>;
};

export default Flex;

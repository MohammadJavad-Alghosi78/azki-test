// node_modules
import { FC } from "react";
// types
import { IFlex } from "./types";
// styles
import { StyledWrapper } from "./styled";

const Flex: FC<IFlex> = (props) => {
  const { children, ...rest } = props;
  return <StyledWrapper {...rest}>{children}</StyledWrapper>;
};

export default Flex;

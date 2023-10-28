// node_modules
import { FC, ReactNode } from "react";
// styles
import { StyledWrapper } from "./styled";

interface IBody {
  children: ReactNode;
}

const Body: FC<IBody> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Body;

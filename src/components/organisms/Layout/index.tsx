// node_modules
import { FC, ReactNode } from "react";
// components
import { Body, Navbar } from "../../molecules";
// styles
import { StyledWrapper } from "./styled";

interface ILayout {
  children: ReactNode;
  pageTitle?: string;
  details: ReactNode | string;
}

const Layout: FC<ILayout> = (props) => {
  const { children, pageTitle, details } = props;
  return (
    <StyledWrapper>
      <Navbar pageTitle={pageTitle} details={details} />
      <Body>{children}</Body>
    </StyledWrapper>
  );
};

export default Layout;

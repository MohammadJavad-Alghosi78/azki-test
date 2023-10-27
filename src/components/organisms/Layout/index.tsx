import { FC, ReactNode } from "react";
import { Body, Navbar } from "../../molecules";
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

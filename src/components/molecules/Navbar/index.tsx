import { FC, ReactNode } from "react";
import { StyledNavbar } from "./styled";
import { Typography } from "../../atoms";

interface INavbar {
  pageTitle?: string;
  details: ReactNode | string;
}

const Navbar: FC<INavbar> = (props) => {
  const { pageTitle, details } = props;
  return (
    <StyledNavbar>
      <img src="/icons/logo.svg" alt="" />
      <Typography variant="heading">{pageTitle ?? ""}</Typography>
      <div>{details}</div>
    </StyledNavbar>
  );
};

export default Navbar;

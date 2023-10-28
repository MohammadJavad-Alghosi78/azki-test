// node_modules
import { FC, ReactNode } from "react";
// components
import { Flex, Typography } from "../../atoms";

interface INavbar {
  pageTitle?: string;
  details: ReactNode | string;
}

const Navbar: FC<INavbar> = (props) => {
  const { pageTitle, details } = props;
  return (
    <Flex
      smflexdirection="row"
      smjustifycontent="space-between"
      alignitems="center"
    >
      <img src="/icons/logo.svg" alt="" width={32} height={32} />
      {window.innerWidth > 760 && (
        <Typography variant="heading">{pageTitle ?? ""}</Typography>
      )}
      <Typography variant="body">{details}</Typography>
    </Flex>
  );
};

export default Navbar;

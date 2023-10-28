// node_modules
import { FC, ReactNode } from "react";
// components
import { Flex, Typography } from "../../atoms";
import { useWidth } from "../../../hooks";

interface INavbar {
  pageTitle?: string;
  details: ReactNode | string;
}

const Navbar: FC<INavbar> = (props) => {
  const { pageTitle, details } = props;
  const { width } = useWidth();

  return (
    <Flex
      smflexdirection="row"
      smjustifycontent="space-between"
      alignitems="center"
    >
      <img src="/icons/logo.svg" alt="" width={32} height={32} />
      {width > 760 && (
        <Typography variant="heading">{pageTitle ?? ""}</Typography>
      )}
      <Typography variant="heading">{details}</Typography>
    </Flex>
  );
};

export default Navbar;

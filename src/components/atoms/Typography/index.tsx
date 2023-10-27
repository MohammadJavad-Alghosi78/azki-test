// node_modules
import { FC } from "react";
// types
import { ITypographyProps } from "./types";
// styles
import { StyledTypography } from "./styled";

const Typography: FC<ITypographyProps> = (props) => {
  const { variant, children, color, ...rest } = props;

  return (
    <StyledTypography variant={variant} color={color} {...rest}>
      {children}
    </StyledTypography>
  );
};

export default Typography;

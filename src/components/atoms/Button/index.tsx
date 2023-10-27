// node_modules
import { FC, MouseEvent } from "react";
// types
import { IButtonProps } from "./types";
// styles
import { StyledButton } from "./styled";

const Button: FC<IButtonProps> = (props) => {
  const { variant, children, loading, ...rest } = props;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (rest.onClick instanceof Function) rest.onClick(e);
  };

  return (
    <StyledButton variant={variant} onClick={handleClick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;

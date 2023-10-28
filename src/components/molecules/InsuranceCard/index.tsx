// node_modules
import { FC } from "react";
// components
import { Typography } from "../../atoms";
// types
import { IInsuranceCardPropsType } from "./types";
// styles
import { StyledWrapper } from "./styled";

const InsuranceCard: FC<IInsuranceCardPropsType> = (props) => {
  const { title, imageSrc, disabled = false, onClick } = props;

  const handleCardClick = () => {
    if (onClick instanceof Function) onClick();
  };

  return (
    <StyledWrapper
      disabled={disabled}
      role="presentation"
      onClick={handleCardClick}
    >
      <img src={imageSrc} alt={title} width={36} height={36} />
      <Typography variant="caption">{title}</Typography>
    </StyledWrapper>
  );
};

export default InsuranceCard;

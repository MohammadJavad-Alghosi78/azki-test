import { FC } from "react";
import { StyledWrapper } from "./styled";
import { IInsuranceCardPropsType } from "./types";
import { Typography } from "../../atoms";

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

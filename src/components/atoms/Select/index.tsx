// node_modules
import { ChangeEvent, FC } from "react";
// types
import { ISelectProps } from "./types";
import { StyledSelect, StyledWrapper, StyledArrow } from "./styled";

const Select: FC<ISelectProps> = (props) => {
  const { options, label, onChange } = props;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange instanceof Function) onChange(e);
  };

  return (
    <StyledWrapper>
      <StyledArrow src="/icons/arrow.svg" alt="arrow" />
      <StyledSelect onChange={handleChange}>
        <option value="" selected hidden disabled>
          {label}
        </option>
        {options?.map((option) => (
          <option value={option.value}>{option.title}</option>
        ))}
      </StyledSelect>
    </StyledWrapper>
  );
};

export default Select;

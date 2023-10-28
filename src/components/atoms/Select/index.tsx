// node_modules
import { ChangeEvent, FC } from "react";
// types
import { ISelectProps } from "./types";
// styles
import { StyledSelect, StyledWrapper, StyledArrow } from "./styled";

const Select: FC<ISelectProps> = (props) => {
  const { options, label, onChange, disabled } = props;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange instanceof Function) onChange(e);
  };

  return (
    <StyledWrapper>
      <StyledArrow src="/icons/arrow.svg" alt="arrow" />
      <StyledSelect disabled={disabled} defaultValue="" onChange={handleChange}>
        <option value="" hidden disabled>
          {label}
        </option>
        {options?.map((option, index) => (
          <option key={`${option.title}__index=${index}`} value={option.value}>
            {option.title}
          </option>
        ))}
      </StyledSelect>
    </StyledWrapper>
  );
};

export default Select;

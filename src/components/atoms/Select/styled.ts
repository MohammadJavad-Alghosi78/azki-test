// node_modules
import styled from "styled-components";

export const StyledWrapper = styled.div(() => ({
  position: "relative",
  minWidth: "136px",
  width: "100%",
}));

export const StyledArrow = styled.img(() => ({
  position: "absolute",
  width: "16px",
  height: "16px",
  top: "24px",
  left: "8px",
  transform: "rotate(-90deg)",
  filter:
    "invert(77%) sepia(55%) saturate(10%) hue-rotate(88deg) brightness(108%) contrast(93%)",
  pointerEvents: "none",
  cursor: "pointer",
}));

export const StyledSelect = styled.select(({ theme }) => ({
  cursor: "pointer",
  width: "100%",
  height: "60px",
  padding: "8px",
  borderRadius: "5px",
  border: `1px solid ${theme.colors.gray}`,
  color: theme.colors.black,
  backgroundColor: theme.colors.white,
  fontSize: "18px",
  outline: "none",
  appearance: "none",
  "-webkit-appearance": "none",
  "-moz-appearance": "none",
  "-ms-appearance": "none",
  "&:disabled": {
    cursor: "not-allowed",
  },
}));

// node_modules
import styled from "styled-components";
// types
import { CardWrapperType } from "./types";

export const StyledWrapper = styled.div<CardWrapperType>(
  ({ theme, disabled }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: " center",
    gap: "12px",
    borderRadius: "10px",
    border: `1px solid ${theme.colors.gray}`,
    width: "100px",
    height: "100px",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background-color 0.5s",
    filter: disabled ? "blur(1px)" : "blur(0)",

    "&:hover": {
      backgroundColor: !disabled && theme.colors.gray,
    },
  })
);

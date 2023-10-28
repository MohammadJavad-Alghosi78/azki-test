import styled from "styled-components";
import { IFlex } from "./types";

export const StyledWrapper = styled.div<IFlex>(
  ({ justifyContent, alignItems, gap }) => ({
    display: "flex",
    flexDirection: "column",
    gap: gap ?? "0",
    justifyContent: justifyContent ?? "flex-start",
    alignItems: alignItems ?? "center",

    "@media(min-width: 760px)": {
      flexDirection: "row",
    },
  })
);

import styled from "styled-components";
import { IFlex } from "./types";

export const StyledWrapper = styled.div<IFlex>(
  ({ theme, justifyContent, alignItems, gap }) => ({
    display: "flex",
    flexDirection: "column",
    gap: gap ?? "0",
    justifyContent: justifyContent ?? "flex-start",
    alignItems: alignItems ?? "flex-start",

    "@media(min-width: 760px)": {
      flexDirection: "row",
    },
  })
);

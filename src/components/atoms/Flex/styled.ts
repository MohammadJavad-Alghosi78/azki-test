// node_modules
import styled from "styled-components";
// types
import { IFlex } from "./types";

export const StyledWrapper = styled.div<IFlex>(
  ({
    flexdirection,
    justifycontent,
    alignitems,
    gap,
    width,
    smflexdirection,
    smjustifycontent,
    smalignitems,
    smgap,
    smwidth,
    padding,
  }) => ({
    padding,
    width: smwidth ?? "100%",
    display: "flex",
    flexDirection: smflexdirection ?? "column",
    justifyContent: smjustifycontent ?? "flex-start",
    alignItems: smalignitems ?? "center",
    gap: smgap ?? 0,

    "@media(min-width: 760px)": {
      flexDirection: flexdirection ?? smflexdirection ?? "row",
      justifyContent: justifycontent ?? smjustifycontent ?? "flex-start",
      alignItems: alignitems ?? smalignitems ?? "center",
      gap: gap ?? smgap ?? 0,
      width: width ?? smwidth ?? "100%",
    },
  })
);

// node_modules
import { CSSProperties, ReactNode } from "react";

export interface IFlex {
  children: ReactNode;

  width?: CSSProperties["width"];
  flexdirection?: CSSProperties["flexDirection"];
  justifycontent?: CSSProperties["justifyContent"];
  alignitems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];

  smwidth?: CSSProperties["width"];
  smjustifycontent?: CSSProperties["justifyContent"];
  smalignitems?: CSSProperties["alignItems"];
  smflexdirection?: CSSProperties["flexDirection"];
  smgap?: CSSProperties["gap"];
  className?: string;
}

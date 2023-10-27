import { CSSProperties, ReactNode } from "react";

export interface IFlex {
  children: ReactNode;
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  className?: string;
}

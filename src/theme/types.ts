import { CSSProperties } from "react";

export interface IColors {
  black: CSSProperties["color"];
  gray: CSSProperties["color"];
  green: CSSProperties["color"];
  white: CSSProperties["color"];
}

export interface IBreakPoints {
  sm: number;
}

export interface ITheme {
  colors: IColors;
  breakPoints: IBreakPoints;
}

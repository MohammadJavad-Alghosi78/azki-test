// node_modules
import { CSSProperties, HTMLAttributes, ReactNode } from "react";

type DefaultHTMLTextsTypes = HTMLAttributes<HTMLSpanElement | HTMLHeadElement>;

export type TypographyVariants = "heading" | "body" | "caption";

export interface ITypographyProps extends DefaultHTMLTextsTypes {
  variant: TypographyVariants;
  children: ReactNode;
  color?: CSSProperties["color"];
  className?: string;
  styles?: CSSProperties;
}

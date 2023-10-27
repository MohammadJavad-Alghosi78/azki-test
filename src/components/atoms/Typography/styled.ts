// node_modules
import styled from "styled-components";
// types
import { ITypographyProps, TypographyVariants } from "./types";

const handleVariantStyles = (variant: TypographyVariants) => {
  switch (variant) {
    case "heading":
      return {
        fontSize: "18px",
        fontWeight: "bold",
      };
    case "body":
      return {
        fontSize: "14px",
        fontWeight: "500",
      };
    case "caption":
      return {
        fontSize: "12px",
        fontWeight: "400",
      };
  }
};

export const StyledTypography = styled("span")<ITypographyProps>(
  ({ theme, variant, color }) => ({
    color: color ?? theme.colors.black,
    ...handleVariantStyles(variant),
  })
);

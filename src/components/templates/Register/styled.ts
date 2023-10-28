// node_modules
import styled from "styled-components";

export const StyledWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "36px",
  width: "100%",
  ".register__footer button": {
    marginInline: "auto",
  },

  ".register__name": {
    width: "100%",
  },

  ".register__title": {
    marginBottom: "24px",
  },

  "@media(min-width: 760px)": {
    width: "50%",
    ".register__footer button": {
      marginInline: "unset",
    },
  },
}));

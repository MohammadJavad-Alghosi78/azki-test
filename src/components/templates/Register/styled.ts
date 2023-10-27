import styled from "styled-components";

export const StyledWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
  ".register__footer button": {
    marginInline: "auto",
  },

  ".register__name": {
    width: "calc(100% - 12px)",
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

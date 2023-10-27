import styled from "styled-components";

export const StyledWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
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
    ".register__name": {
      width: "calc(50% - 12px)",
    },
    ".register__footer button": {
      marginInline: "unset",
    },
  },
}));

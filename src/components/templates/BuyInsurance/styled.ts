import styled from "styled-components";

export const StyledWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  width: "100%",

  "@media(min-width: 760px)": {
    width: "50%",
  },
}));

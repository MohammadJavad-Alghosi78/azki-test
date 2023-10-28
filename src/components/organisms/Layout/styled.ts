// node_modules
import styled from "styled-components";

export const StyledWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "42px",
  maxWidth: "2000px",
  marginInline: "auto",
  padding: "12px",
  height: "calc(100vh - 24px)",
  background: `linear-gradient(180deg, transparent 75%, ${theme.colors.lightBackground} 25%) no-repeat`,

  "@media(min-width: 760px)": {
    background: `linear-gradient(90deg, ${theme.colors.lightBackground} 20%, transparent 10%) no-repeat`,
    padding: "12px 100px",
  },
}));

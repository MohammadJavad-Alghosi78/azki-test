// node_modules
import styled from "styled-components";

export const StyledWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "42px",
  maxWidth: "1600px",
  marginInline: "auto",
  padding: "12px",
  height: "calc(100vh - 30px)",
}));

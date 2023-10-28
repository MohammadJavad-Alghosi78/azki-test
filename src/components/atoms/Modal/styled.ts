// node_modules
import styled from "styled-components";

export const StyledModalWrapper = styled.div(({ theme }) => ({
  display: "flex",
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
  backgroundColor: `${theme.colors.gray}70`,
  zIndex: "9",
  width: "100%",
  minHeight: "100vh",
}));

export const StyledModal = styled.div(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.colors.white,
  width: "500px",
  border: `1px solid ${theme.colors.gray}`,
  borderRadius: "15px",
  overflow: "hidden",
  margin: "0 15px 160px",
}));

export const StyledModalBody = styled.div`
  padding: 20px;
  margin-bottom: 54px;
`;

export const StyledModalFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  display: flex;
  padding: 10px 1.5rem;
  box-sizing: border-box;
`;

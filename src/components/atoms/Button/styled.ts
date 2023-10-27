// node_modules
import styled from "styled-components";
// types
import { IButtonProps } from "./types";

export const StyledButton = styled.button<IButtonProps>(({ theme }) => ({
  borderRadius: "10px",
  // Other styles after theme ...
}));

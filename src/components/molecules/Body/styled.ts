// node_modules
import styled from "styled-components";

export const StyledWrapper = styled.main(() => ({
  paddingInline: "24px",
  backgroundImage: "url(/icons/car-green.svg)",
  backgroundSize: "400px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom left",
  height: "calc(100vh - 42px)",
  marginTop: "20px",

  "@media(min-width: 760px)": {
    backgroundSize: "600px",
    marginTop: "100px",
  },
}));

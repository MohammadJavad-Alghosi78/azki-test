import styled from "styled-components";

export const StyledWrapper = styled.main(({ theme }) => ({
  paddingInline: "24px",
  backgroundImage: "url(/icons/car-green.svg)",
  backgroundSize: "300px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom left",
  height: "calc(100vh - 42px)",

  "@media(min-width: 760px)": {
    backgroundSize: "500px",
  },
}));

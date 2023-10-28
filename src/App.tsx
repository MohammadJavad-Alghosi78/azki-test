// node_modules
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
// pages
import { BuyInsurance, Register } from "./components/pages";
// theme
import theme from "./theme";
// styles
import GlobalStyle from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/buy-insurance" element={<BuyInsurance />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

// node_modules
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
// theme
import theme from "./theme";
import GlobalStyle from "./styles";
import { BuyInsurance, Register } from "./components/pages";

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

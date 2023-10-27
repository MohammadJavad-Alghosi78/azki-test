// node_modules
import { ThemeProvider } from "styled-components";
// components
import { Button, Select, TextField, Typography } from "./components/atoms";
// theme
import theme from "./theme";
import { useState } from "react";
import GlobalStyle from "./styles";

function App() {
  const [value, setValue] = useState("");
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <br />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            width: "100%",
          }}
        >
          <Button variant="contained" onClick={() => console.log("test")}>
            contained
          </Button>
          <Button variant="outlined">outlined</Button>
          <TextField
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="phone number ..."
          />
          <Select
            options={[
              { value: "benz", title: "benz" },
              { value: "bmw", title: "bmw" },
              { value: "ford", title: "ford" },
            ]}
            label="m"
          />
          <Typography variant="heading">Heading</Typography>
          <Typography variant="body">Body</Typography>
          <Typography variant="caption">Caption</Typography>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

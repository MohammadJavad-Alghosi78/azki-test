// node_modules
import { ThemeProvider } from "styled-components";
// components
import { Button, Select, TextField, Typography } from "./components/atoms";
// theme
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
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
          <Button variant="contained">test</Button>
          <TextField />
          <Select options={[]} />
          <Typography variant="heading">Heading</Typography>
          <Typography variant="body">Body</Typography>
          <Typography variant="caption">Caption</Typography>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

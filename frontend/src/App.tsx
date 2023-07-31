import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { themeSettings } from "./theme";
import NavBar from "./pages/navbar/NavBar";
import Dashboard from "./pages/dashboard/Dashboard";
import Predictions from "./pages/predictions/Predictions";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <NavBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

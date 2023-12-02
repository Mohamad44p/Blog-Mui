import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Navigation from "../src/pages/Navigation ";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Navigation /> 
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;

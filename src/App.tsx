import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseLine from "@mui/material/CssBaseline";

import { AboutPage, HomePage, WorldMapPage } from "./pages";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <>
      <CssBaseLine />
      <BrowserRouter>
        <Routes>
          <Route path="/map" element={<WorldMapPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

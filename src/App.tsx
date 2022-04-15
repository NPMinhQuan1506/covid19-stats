import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseLine from "@mui/material/CssBaseline";

import { AboutPage, HomePage,  ContactPage} from "./pages";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <>
      <CssBaseLine />
      <BrowserRouter>
      <AppBar />
        <Routes>
          <Route  path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

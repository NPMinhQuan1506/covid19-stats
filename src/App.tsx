import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App({ dark, setDark }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home dark={dark} setDark={setDark} />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </Router>
  );
}

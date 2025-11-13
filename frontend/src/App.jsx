import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CreateProfiles from "./components/CreateProfiles";


export default function App() {
  // Estado dark mode, persistido no localStorage
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("lifonix-dark") === "true";
  });

  // Atualiza a classe dark no html e persiste
  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("lifonix-dark", dark);
  }, [dark]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home dark={dark} setDark={setDark} />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/create-profile" element={<CreateProfiles />} />
      </Routes>
    </Router>
  );
}

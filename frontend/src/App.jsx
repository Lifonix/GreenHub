import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Empresas from "./pages/Empresas";
import CreateProfiles from "./components/CreateProfiles";
import NoticiasAmbientais from "./pages/NoticiasAmbientais";

export default function App() {
  // Tema global (dark mode)
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("lifonix-dark") === "true";
  });

  // Usuário global
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("lifonix-user");
    return saved ? JSON.parse(saved) : null;
  });

  // Atualiza tema global
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("lifonix-dark", dark);
  }, [dark]);

  return (
    <Router>
      <div
        className={`min-h-screen flex flex-col transition-colors duration-500 ${
          dark ? "dark bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        {/* Conteúdo principal */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  dark={dark}
                  setDark={setDark}
                  user={user}
                  setUser={setUser}
                />
              }
            />

            <Route path="/sobre" element={<About />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/create-profile" element={<CreateProfiles />} />
            <Route path="/noticias-ambientais" element={<NoticiasAmbientais />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

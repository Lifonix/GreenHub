import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  const [dark, setDark] = useState(false);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("lifonix-user");
    return saved ? JSON.parse(saved) : null;
  });

  return (
    <div
      className={`${
        dark ? "dark bg-[#0C1A0C] text-gray-100" : "bg-white text-gray-900"
      } min-h-screen flex flex-col transition-colors duration-300`}
    >
      <Header dark={dark} setDark={setDark} user={user} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home dark={dark} user={user} setUser={setUser} />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

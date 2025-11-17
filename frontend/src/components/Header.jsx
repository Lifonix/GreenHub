import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ dark, setDark, user, onLoginClick, filters, setFilters }) {
  const location = useLocation();

  const headerBg = dark
    ? "bg-[#0C1A0C] text-gray-100 border-[#14532D]"
    : "bg-white text-gray-800 border-gray-200";

  const inputBg = dark
    ? "bg-[#1B2E1D] border-[#14532D] text-gray-100 placeholder-gray-400"
    : "bg-white border-gray-200 text-gray-700 placeholder-gray-400";

  const loginBtn = "bg-[#22C55E] text-white hover:bg-[#16A34A]";

  return (
    <header
      className={`sticky top-0 z-50 border-b shadow-sm transition-colors duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4 gap-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#22C55E]">
          Lifonix
        </Link>

        {/* Campo de busca (só aparece na Home) */}
        {location.pathname === "/" && (
          <input
            type="text"
            placeholder="Buscar profissionais..."
            value={filters?.search || ""}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className={`w-full sm:w-1/2 px-4 py-2 rounded-full focus:ring-2 focus:ring-[#22C55E] outline-none border transition ${inputBg}`}
          />
        )}

        {/* Navegação e ações */}
        <div className="flex items-center gap-4">
          <nav className="flex gap-4 text-sm font-medium">
            <Link
              to="/"
              className={`hover:text-[#22C55E] transition-colors ${
                location.pathname === "/" ? "text-[#22C55E] font-semibold" : ""
              }`}
            >
              Início
            </Link>

            <Link
              to="/sobre"
              className={`hover:text-[#22C55E] transition-colors ${
                location.pathname === "/sobre" ? "text-[#22C55E] font-semibold" : ""
              }`}
            >
              Sobre Nós
            </Link>

            <Link
              to="/noticias-ambientais"
              className={`hover:text-[#22C55E] transition-colors ${
                location.pathname === "/noticias-ambientais" ? "text-[#22C55E] font-semibold" : ""
              }`}
            >
              Notícias
            </Link>

            {/* NOVO ITEM: Dashboard */}
            <Link
              to="/dashboard"
              className={`hover:text-[#22C55E] transition-colors ${
                location.pathname === "/dashboard" ? "text-[#22C55E] font-semibold" : ""
              }`}
            >
              Dashboard
            </Link>
          </nav>


          {/* Login ou sair */}
          {user ? (
            <button
              onClick={() => {
                localStorage.removeItem("lifonix-token");
                localStorage.removeItem("lifonix-user");
                window.location.reload();
              }}
              className="px-4 py-2 rounded-full border border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E]/10 transition text-sm"
            >
              Sair ({user.nome.split(" ")[0]})
            </button>
          ) : (
            <button
              onClick={onLoginClick}
              className={`px-4 py-2 rounded-full font-medium transition ${loginBtn}`}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

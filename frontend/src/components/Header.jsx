import React from "react";

export default function Header({ dark, setDark, onLoginClick, user, filters, setFilters }) {
  const headerBg = dark
    ? "bg-gray-900 text-gray-100 border-gray-800"
    : "bg-white text-gray-800 border-gray-200";
  const inputBg = dark
    ? "bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
    : "bg-white border-gray-200 text-gray-700";
  const loginBtn = dark
    ? "bg-[#60A5FA] text-white hover:bg-[#60A5FA]/90"
    : "bg-[#60A5FA] text-white hover:bg-[#60A5FA]/90";

  return (
    <header
      className={`sticky top-0 z-50 border-b shadow-sm transition-colors duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4 gap-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#60A5FA] cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Lifonix
        </h1>

        {/* Campo de busca */}
        <input
          type="text"
          placeholder="Buscar profissionais..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className={`w-full sm:w-1/2 px-4 py-2 rounded-full focus:ring-2 focus:ring-[#60A5FA] outline-none transition ${inputBg}`}
        />

        {/* Ações */}
        <div className="flex items-center gap-3">
          {/* Botão Sobre */}
          <button
            onClick={() =>
              document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })
            }
            className={`text-sm font-medium ${
              dark ? "text-gray-200 hover:text-[#60A5FA]" : "text-gray-700 hover:text-[#2563EB]"
            } transition`}
          >
            Sobre
          </button>

          {/* Alternar modo */}
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-2 rounded-full bg-gray-100/10 hover:bg-gray-200/20 transition text-lg"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* Login / Sair */}
          {user ? (
            <button
              onClick={() => {
                localStorage.removeItem("lifonix-token");
                localStorage.removeItem("lifonix-user");
                window.location.reload();
              }}
              className="px-4 py-2 rounded-full border border-[#60A5FA] text-[#60A5FA] hover:bg-[#60A5FA]/10 transition text-sm"
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

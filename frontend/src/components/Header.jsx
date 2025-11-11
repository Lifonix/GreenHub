import React, { useEffect, useState } from "react";


export default function Header({ search, setSearch }) {
  const [dark, setDark] = useState(() => localStorage.getItem("lifonix-theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("lifonix-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#071226] backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--accent)] text-white font-bold">L</div>
          <div>
            <div className="text-lg font-bold">Lifonix</div>
            <div className="text-xs text-gray-500">Network</div>
          </div>
        </div>

        <div className="flex-1 px-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nome, cargo, área ou cidade..."
            className="w-full max-w-2xl mx-auto block px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#071226] focus:ring-2 focus:ring-[var(--accent)] outline-none transition"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <button className="px-4 py-2 rounded-full border border-gray-200 hover:shadow-sm text-sm">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Header({ dark, setDark }) {
  return (
    <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Lifonix Network
        </h1>
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {dark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
        </button>
      </div>
    </header>
  );
}

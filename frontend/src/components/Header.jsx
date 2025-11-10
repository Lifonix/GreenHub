import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header({ dark, setDark }) {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b dark:border-gray-700">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        Lifonix
      </h1>
      <button
        onClick={() => setDark(!dark)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {dark ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
}

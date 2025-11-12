import React, { useState } from "react";

export default function SearchFilter({ profiles, filters, setFilters }) {
  const areas = [...new Set(profiles.map((p) => p.area))];
  const cities = [...new Set(profiles.map((p) => p.localizacao))];
  const techs = [...new Set(profiles.flatMap((p) => p.habilidadesTecnicas || []))];

  // Estados para abrir/fechar dropdowns
  const [openArea, setOpenArea] = useState(false);
  const [openCity, setOpenCity] = useState(false);
  const [openTech, setOpenTech] = useState(false);

  const Dropdown = ({ label, options, value, setValue, open, setOpen }) => (
    <div className="relative w-48">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2 rounded-xl border border-[#D1FAE5] dark:border-[#14532D]
                   bg-white dark:bg-[#1B2E1D] text-gray-800 dark:text-gray-200 font-medium
                   hover:shadow-md transition-shadow duration-300 flex justify-between items-center"
      >
        {value || label}
        <span className={`transform transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
      {open && (
        <ul className="absolute z-50 mt-1 w-full bg-white dark:bg-[#14532D] border border-[#D1FAE5] dark:border-[#14532D]
                       rounded-xl shadow-lg max-h-60 overflow-y-auto">
          {options.map((opt) => (
            <li
              key={opt}
              className="px-4 py-2 hover:bg-[#DCFCE7] dark:hover:bg-[#166534]/40 cursor-pointer transition-colors duration-200"
              onClick={() => {
                setValue(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
          <li
            className="px-4 py-2 text-gray-500 dark:text-gray-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#14532D]/40 transition-colors duration-200"
            onClick={() => {
              setValue("");
              setOpen(false);
            }}
          >
            Limpar
          </li>
        </ul>
      )}
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-white dark:bg-[#1B2E1D] border border-[#D1FAE5] dark:border-[#14532D] rounded-2xl shadow-md transition-colors duration-500">
      
      <Dropdown
        label="Todas as áreas"
        options={areas}
        value={filters.area}
        setValue={(val) => setFilters({ ...filters, area: val })}
        open={openArea}
        setOpen={setOpenArea}
      />
      <Dropdown
        label="Todas as cidades"
        options={cities}
        value={filters.city}
        setValue={(val) => setFilters({ ...filters, city: val })}
        open={openCity}
        setOpen={setOpenCity}
      />
      <Dropdown
        label="Todas as tecnologias"
        options={techs}
        value={filters.tech}
        setValue={(val) => setFilters({ ...filters, tech: val })}
        open={openTech}
        setOpen={setOpenTech}
      />

      {/* Botão Limpar tudo */}
      <button
        onClick={() => setFilters({ search: "", area: "", city: "", tech: "" })}
        className="px-5 py-2 rounded-xl border border-[#D1FAE5] dark:border-[#14532D] 
                   bg-gray-50 dark:bg-[#0F1E11] text-gray-700 dark:text-gray-300 font-medium
                   hover:shadow-md hover:bg-gray-100 dark:hover:bg-[#14532D]/50 transition-all duration-300"
      >
        Limpar filtros
      </button>
    </div>
  );
}

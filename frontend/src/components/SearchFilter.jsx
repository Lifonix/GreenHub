import React from "react";

/*
 SearchFilter: receives arrays for areas/cities/techs and controlled props
*/
export default function SearchFilter({
  areas = [],
  cities = [],
  techs = [],
  areaFilter,
  cityFilter,
  techFilter,
  setAreaFilter,
  setCityFilter,
  setTechFilter,
  setSearch,
}) {
  return (
    <div>
      <h3 className="font-semibold mb-3">Filtros</h3>

      <label className="block text-xs mb-1">Busca</label>
      <input
        placeholder="Busca geral..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-3 px-3 py-2 rounded-lg border bg-white dark:bg-[#071226] dark:border-gray-700"
      />

      <label className="block text-xs mb-1">Área</label>
      <select value={areaFilter} onChange={(e) => setAreaFilter(e.target.value)} className="w-full mb-3 p-2 rounded-lg border bg-white dark:bg-[#071226]">
        <option value="">Todas</option>
        {areas.map((a) => <option key={a} value={a}>{a}</option>)}
      </select>

      <label className="block text-xs mb-1">Cidade</label>
      <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)} className="w-full mb-3 p-2 rounded-lg border bg-white dark:bg-[#071226]">
        <option value="">Todas</option>
        {cities.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>

      <label className="block text-xs mb-1">Tecnologia</label>
      <select value={techFilter} onChange={(e) => setTechFilter(e.target.value)} className="w-full mb-3 p-2 rounded-lg border bg-white dark:bg-[#071226]">
        <option value="">Todas</option>
        {techs.map((t) => <option key={t} value={t}>{t}</option>)}
      </select>

      <div className="mt-3">
        <button onClick={() => { setAreaFilter(""); setCityFilter(""); setTechFilter(""); setSearch(""); }} className="px-3 py-2 rounded-md border text-sm">
          Limpar filtros
        </button>
      </div>
    </div>
  );
}

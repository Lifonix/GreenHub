export default function SearchFilter({ profiles, filters, setFilters }) {
  const areas = [...new Set(profiles.map((p) => p.area))];
  const cities = [...new Set(profiles.map((p) => p.localizacao))];
  const techs = [
    ...new Set(profiles.flatMap((p) => p.habilidadesTecnicas || [])),
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 border border-gray-200 rounded-xl p-3 bg-white shadow-sm">
      <select
        value={filters.area}
        onChange={(e) => setFilters({ ...filters, area: e.target.value })}
        className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm"
      >
        <option value="">Todas as áreas</option>
        {areas.map((a) => (
          <option key={a}>{a}</option>
        ))}
      </select>

      <select
        value={filters.city}
        onChange={(e) => setFilters({ ...filters, city: e.target.value })}
        className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm"
      >
        <option value="">Todas as cidades</option>
        {cities.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <select
        value={filters.tech}
        onChange={(e) => setFilters({ ...filters, tech: e.target.value })}
        className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm"
      >
        <option value="">Todas as tecnologias</option>
        {techs.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <button
        onClick={() => setFilters({ search: "", area: "", city: "", tech: "" })}
        className="px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 text-sm hover:bg-gray-100"
      >
        Limpar filtros
      </button>
    </div>
  );
}

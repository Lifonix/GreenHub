import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchFilters({ busca, setBusca, filtros, setFiltros }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
      <div className="flex flex-wrap gap-3 items-center">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar profissionais..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
          />
        </div>

        <select
          value={filtros.area}
          onChange={(e) => setFiltros({ ...filtros, area: e.target.value })}
          className="border rounded-lg px-3 py-2 dark:bg-gray-800"
        >
          <option value="">Área</option>
          <option value="Desenvolvimento">Desenvolvimento</option>
          <option value="Design">Design</option>
          <option value="Data Science">Data Science</option>
          <option value="Infraestrutura">Infraestrutura</option>
          <option value="Recursos Humanos">Recursos Humanos</option>
        </select>

        <input
          value={filtros.cidade}
          onChange={(e) => setFiltros({ ...filtros, cidade: e.target.value })}
          placeholder="Cidade"
          className="border rounded-lg px-3 py-2 dark:bg-gray-800"
        />

        <input
          value={filtros.tech}
          onChange={(e) => setFiltros({ ...filtros, tech: e.target.value })}
          placeholder="Tecnologia"
          className="border rounded-lg px-3 py-2 dark:bg-gray-800"
        />
      </div>
    </div>
  );
}

import { useState } from "react";

export default function SearchFilter({ onSearch }) {
  const [term, setTerm] = useState("");
  const [area, setArea] = useState("");
  const [cidade, setCidade] = useState("");
  const [tecnologia, setTecnologia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term, area, cidade, tecnologia);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-4 justify-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
    >
      <input
        type="text"
        placeholder="Buscar por nome..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="border rounded-lg px-3 py-2 w-48"
      />
      <input
        type="text"
        placeholder="Área"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        className="border rounded-lg px-3 py-2 w-40"
      />
      <input
        type="text"
        placeholder="Cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        className="border rounded-lg px-3 py-2 w-40"
      />
      <input
        type="text"
        placeholder="Tecnologia"
        value={tecnologia}
        onChange={(e) => setTecnologia(e.target.value)}
        className="border rounded-lg px-3 py-2 w-40"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Buscar
      </button>
    </form>
  );
}

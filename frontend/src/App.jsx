import { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "./components/ProfileCard";
import ProfileModal from "./components/ProfileModal";

export default function App() {
  const [profiles, setProfiles] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/profissionais")
      .then((res) => {
        setProfiles(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error("Erro ao buscar perfis:", err));
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearch(term);
    const result = profiles.filter(
      (p) =>
        p.nome.toLowerCase().includes(term) ||
        p.area.toLowerCase().includes(term) ||
        p.localizacao.toLowerCase().includes(term)
    );
    setFiltered(result);
  };

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-gray-50 min-h-screen"}>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Lifonix</h1>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Buscar por nome, cidade ou área..."
              value={search}
              onChange={handleSearch}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 w-64"
            />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {darkMode ? "Modo Claro" : "Modo Escuro"}
            </button>
          </div>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProfileCard key={p.id} profile={p} onClick={() => setSelected(p)} />
          ))}
        </div>

        {/* Modal */}
        {selected && <ProfileModal profile={selected} onClose={() => setSelected(null)} />}
      </div>
    </div>
  );
}

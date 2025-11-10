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
      .get("http://localhost:5000/profiles")
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
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-gray-100 min-h-screen"}>
      <div className="max-w-6xl mx-auto p-6">
        {/* Cabeçalho */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            ConectaFuturo
          </h1>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Buscar por nome, cidade ou área..."
              value={search}
              onChange={handleSearch}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800"
            />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            >
              {darkMode ? "☀️" : "🌙"}
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

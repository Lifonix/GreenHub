import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "./components/ProfileCard";
import ProfileModal from "./components/ProfileModal";
import SearchFilter from "./components/SearchFilter";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [loading, setLoading] = useState(true); // 👈 novo estado de loading
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/profissionais");
        setProfiles(res.data);
        setFilteredProfiles(res.data);
      } catch (err) {
        console.error("Erro ao buscar profissionais:", err);
        setError("Não foi possível carregar os dados.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfiles();
  }, []);

  const handleFilter = (filtered) => {
    setFilteredProfiles(filtered);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-100">
        <p className="text-lg animate-pulse">Carregando profissionais...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-800 shadow p-4 sticky top-0 z-10">
        <h1 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 text-center">
          Lifonix — Conectando Talentos
        </h1>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <SearchFilter profiles={profiles} onFilter={handleFilter} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {filteredProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onClick={() => setSelectedProfile(profile)}
            />
          ))}
        </div>
      </main>

      {selectedProfile && (
        <ProfileModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchFilter from "../components/SearchFilter";
import ProfileCard from "../components/ProfileCard";
import ProfileModal from "../components/ProfileModal";
import StoriesSection from "../components/StoriesSection";
import TrendingSkills from "../components/TrendingSkills";
import CommunityMetrics from "../components/CommunitySection";

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [filters, setFilters] = useState({ search: "", area: "", city: "", tech: "" });
  const [mostrar, setMostrar] = useState(false);

  // Carregar os perfis do backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/profissionais").then((res) => {
      setProfiles(res.data);
    });
  }, []);

  // Filtragem dos perfis
  const filteredProfiles = profiles.filter((p) => {
    const term = filters.search.toLowerCase();
    return (
      (!filters.area || p.area === filters.area) &&
      (!filters.city || p.localizacao === filters.city) &&
      (!filters.tech || (p.habilidadesTecnicas || []).includes(filters.tech)) &&
      (!term ||
        p.nome.toLowerCase().includes(term) ||
        p.cargo.toLowerCase().includes(term) ||
        p.resumo.toLowerCase().includes(term))
    );
  });

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-[#15803D]">Conecte-se ao futuro do trabalho</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-xl mx-auto">
          Descubra talentos e propósitos na plataforma Lifonix — feita para unir tecnologia, propósito e pessoas.
        </p>
        <button
          onClick={() => setMostrar(!mostrar)}
          className="mt-6 px-6 py-3 rounded-full bg-[#22C55E] text-white font-medium hover:bg-[#15803D] transition"
        >
          {mostrar ? "Ocultar profissionais" : "Explorar profissionais"}
        </button>
      </section>

      {/* Lista de Profissionais */}
      {mostrar && (
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <SearchFilter profiles={profiles} filters={filters} setFilters={setFilters} />

          <main className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} onClick={() => setSelectedProfile(profile)} />
            ))}
          </main>
        </div>
      )}

      {/* Seções complementares */}
      <TrendingSkills />
      <StoriesSection />
      <CommunityMetrics />

      {/* Modal de Perfil */}
      {selectedProfile && (
        <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
      )}
    </div>
  );
}

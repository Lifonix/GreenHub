import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import ProfileCard from "../components/ProfileCard";
import ProfileModal from "../components/ProfileModal";
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";
import TrendingSkills from "../components/TrendingSkills";
import CommunityMetrics from "../components/CommunitySection";
import StoriesSection from "../components/StoriesSection";

export default function Home({ dark, setDark }) {
  const navigate = useNavigate();

  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    area: "",
    city: "",
    tech: "",
    recommendedOnly: false,
  });
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("lifonix-user");
    return saved ? JSON.parse(saved) : null;
  });
  const [mostrar, setMostrar] = useState(false);

  // novo estado: alterna entre todos vs recomendados.json
  const [onlyRecommended, setOnlyRecommended] = useState(false);
  const [loadingProfiles, setLoadingProfiles] = useState(false);

  // carrega perfis (todos ou recomendados) conforme toggle
  useEffect(() => {
    async function carregarPerfis() {
      try {
        setLoadingProfiles(true);
        const url = onlyRecommended
          ? "http://localhost:5000/api/recomendacoes" // puxa recomendados.json
          : "http://localhost:5000/api/profissionais"; // puxa profiles.json

        const res = await axios.get(url);
        setProfiles(res.data);
      } catch (err) {
        console.error("Erro ao carregar profissionais:", err);
        setProfiles([]);
      } finally {
        setLoadingProfiles(false);
      }
    }

    carregarPerfis();
  }, [onlyRecommended]);

  // aplica filtros de texto/área/cidade/tech em cima da lista carregada
  const filteredProfiles = useMemo(() => {
    return profiles.filter((p) => {
      const term = filters.search.toLowerCase();

      if (filters.area && p.area !== filters.area) return false;
      if (filters.city && p.localizacao !== filters.city) return false;
      if (filters.tech && !(p.habilidadesTecnicas || []).includes(filters.tech))
        return false;

      if (term) {
        const nomeMatch = p.nome?.toLowerCase().includes(term);
        const cargoMatch = p.cargo?.toLowerCase().includes(term);
        const resumoMatch = p.resumo?.toLowerCase().includes(term);
        if (!nomeMatch && !cargoMatch && !resumoMatch) return false;
      }

      return true;
    });
  }, [profiles, filters]);

  return (
    <div className="bg-white dark:bg-[#0B1A0D] text-gray-900 dark:text-gray-100 transition-colors duration-500 min-h-screen flex flex-col">
      <Header
        dark={dark}
        setDark={setDark}
        onLoginClick={() => setShowLogin(true)}
        user={user}
        filters={filters}
        setFilters={setFilters}
      />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h1 className="text-3xl font-bold text-[#15803D] dark:text-[#4ADE80]">
          Conecte-se ao futuro do trabalho
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-xl mx-auto">
          Descubra talentos e propósitos na plataforma Lifonix — feita para unir tecnologia, propósito e pessoas.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          {/* Explorar profissionais */}
          <button
            onClick={() => setMostrar(!mostrar)}
            className="px-6 py-3 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-medium transition shadow-sm"
          >
            {mostrar ? "Ocultar profissionais" : "Explorar profissionais"}
          </button>

          {/* Criar Perfil */}
          <button
            onClick={() => navigate("/create-profile")}
            className="px-6 py-3 rounded-full bg-[#15803D] hover:bg-[#166534] text-white font-medium transition shadow-sm"
          >
            Criar Seu Perfil
          </button>

          {/* Sou uma Empresa */}
          <button
            onClick={() => navigate("/empresas")}
            className="px-6 py-3 rounded-full bg-[#065F46] hover:bg-[#047857] text-white font-medium transition shadow-sm"
          >
            Sou uma Empresa
          </button>
        </div>
      </section>

      {/* Lista de profissionais */}
      {mostrar && (
        <div className="max-w-6xl mx-auto px-6 pb-16 fade-in">
          {/* Filtros por área/cidade/tech */}
          <SearchFilter profiles={profiles} filters={filters} setFilters={setFilters} />

          {/* Botão para usar recomendados.json */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setOnlyRecommended((prev) => !prev)}
              className={
                "inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium border transition " +
                (onlyRecommended
                  ? "bg-[#22C55E] text-white border-[#16A34A]"
                  : "bg-white dark:bg-[#0F1E11] text-gray-700 dark:text-gray-300 border-[#D1FAE5] dark:border-[#14532D]")
              }
            >
              <span>⭐</span>
              <span>
                {onlyRecommended
                  ? "Mostrando apenas recomendados (recomendados.json)"
                  : "Ver apenas recomendados"}
              </span>
            </button>
          </div>

          <main className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loadingProfiles ? (
              <div className="col-span-full text-center text-sm text-gray-500 py-8">
                Carregando profissionais...
              </div>
            ) : filteredProfiles.length === 0 ? (
              <div className="col-span-full text-center text-sm text-gray-500 py-8">
                Nenhum profissional encontrado com os filtros atuais.
              </div>
            ) : (
              filteredProfiles.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  profile={profile}
                  onClick={() => setSelectedProfile(profile)}
                />
              ))
            )}
          </main>
        </div>
      )}

      {/* Seções adicionais */}
      <TrendingSkills />
      <CommunityMetrics />
      <StoriesSection />

      {/* Modais */}
      {selectedProfile && (
        <ProfileModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
          // se quiser marcar isStarred na Home, pode passar onRecommend aqui
          onRecommend={() => {}}
        />
      )}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} setUser={setUser} />}

      <Footer />
    </div>
  );
}

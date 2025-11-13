import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 import do hook
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
  const navigate = useNavigate(); // 👈 inicializa o hook
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [filters, setFilters] = useState({ search: "", area: "", city: "", tech: "" });
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("lifonix-user");
    return saved ? JSON.parse(saved) : null;
  });
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/profissionais")
      .then((res) => setProfiles(res.data))
      .catch((err) => console.error("Erro ao carregar profissionais:", err));
  }, []);

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
          {/* Botão para explorar profissionais */}
          <button
            onClick={() => setMostrar(!mostrar)}
            className="px-6 py-3 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-medium transition"
          >
            {mostrar ? "Ocultar profissionais" : "Explorar profissionais"}
          </button>

          {/* Botão que leva ao formulário de criação de perfil */}
          <button
            onClick={() => navigate("/create-profile")} // 👈 navega para a rota de criação de perfil
            className="px-6 py-3 rounded-full bg-[#15803D] hover:bg-[#166534] text-white font-medium transition"
          >
            Criar Seu Perfil
          </button>
        </div>
      </section>

      {/* Lista de profissionais */}
      {mostrar && (
        <div className="max-w-6xl mx-auto px-6 pb-16 fade-in">
          <SearchFilter profiles={profiles} filters={filters} setFilters={setFilters} />
          <main className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProfiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onClick={() => setSelectedProfile(profile)}
              />
            ))}
          </main>
        </div>
      )}

      {/* 🔥 As seções aparecem abaixo dos profissionais */}
      <TrendingSkills />
      <CommunityMetrics />
      <StoriesSection />

      {/* Modais */}
      {selectedProfile && <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} setUser={setUser} />}

      <Footer />
    </div>
  );
}

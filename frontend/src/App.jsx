import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchFilter from "./components/SearchFilter";
import ProfileCard from "./components/ProfileCard";
import ProfileModal from "./components/ProfileModal";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";

export default function App() {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [filters, setFilters] = useState({ search: "", area: "", city: "", tech: "" });
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("lifonix-user");
    return saved ? JSON.parse(saved) : null;
  });
  const [dark, setDark] = useState(false);
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/profissionais")
      .then((res) => {
        console.log("Perfis recebidos:", res.data.length);
        setProfiles(res.data);
      })
      .catch((err) => console.error("Erro ao buscar profissionais:", err));
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

  const handleMostrar = () => {
    const novoEstado = !mostrar;
    setMostrar(novoEstado);

    if (!novoEstado) return;
    setTimeout(() => {
      document.getElementById("profissionais")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div
      className={`${
        dark ? "dark bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      } min-h-screen flex flex-col transition`}
    >
      {/* Header */}
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
        <h1 className="text-3xl font-bold text-[#2563EB]">
          Conecte-se ao futuro do trabalho
        </h1>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Descubra talentos e propósitos na plataforma Lifonix — feita para unir tecnologia, propósito e pessoas.
        </p>
        <button
          onClick={handleMostrar}
          className="mt-6 px-6 py-3 rounded-full bg-[#60A5FA] text-white font-medium hover:opacity-90 transition"
        >
          {mostrar ? "Ocultar profissionais" : "Explorar profissionais"}
        </button>
      </section>

      {/* Lista de profissionais */}
      {mostrar && (
        <div id="profissionais" className="max-w-6xl mx-auto px-6 pb-16 fade-in">
          <SearchFilter profiles={profiles} filters={filters} setFilters={setFilters} />
          <main className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} onClick={() => setSelectedProfile(profile)} />
            ))}
          </main>
        </div>
      )}

      {/* Seção Sobre - movida para o final */}
      <AboutSection />

      {/* Modais */}
      {selectedProfile && (
        <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
      )}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} setUser={setUser} />}

      {/* Footer */}
      <Footer />
    </div>
  );
}

// src/pages/Home.jsx
import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import ProfileCard from "../components/ProfileCard";
import ProfileModal from "../components/ProfileModal";
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";

/* === Seção interna: Competências em Alta === */
function TrendingSkills({ dark }) {
  const skills = [
    "Inteligência Artificial Ética",
    "Design de Experiência",
    "Gestão Colaborativa",
    "Sustentabilidade Digital",
    "Análise de Dados",
    "UX Research",
  ];

  return (
    <section
      className={
        "py-16 border-t " +
        (dark
          ? "bg-[#0F1E11] border-[#14532D]"
          : "bg-[#F0FDF4] border-[#A7F3D0]")
      }
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className={
            "text-3xl font-bold mb-8 " +
            (dark ? "text-[#4ADE80]" : "text-[#15803D]")
          }
        >
          🌱 Competências em Alta
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className={
                "px-5 py-2 rounded-full font-medium text-sm shadow-sm hover:scale-110 hover:shadow-md transition-transform duration-300 cursor-pointer opacity-0 animate-fade-in " +
                (dark
                  ? "bg-[#14532D] text-[#86EFAC]"
                  : "bg-[#DCFCE7] text-[#15803D]")
              }
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
        <p
          className={
            "mt-6 max-w-2xl mx-auto " +
            (dark ? "text-gray-400" : "text-gray-600")
          }
        >
          Estas são as habilidades mais buscadas no mercado do futuro,
          impulsionadas por tecnologia, empatia e propósito.
        </p>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s forwards;
        }
      `}</style>
    </section>
  );
}

/* === Seção interna: Valores === */
function ValuesSection({ dark }) {
  const valores = [
    {
      titulo: "Sustentabilidade Digital",
      desc: "Criamos soluções tecnológicas que respeitam o meio ambiente e as pessoas.",
    },
    {
      titulo: "Inclusão e Diversidade",
      desc: "Promovemos a colaboração entre profissionais de diferentes contextos e culturas.",
    },
    {
      titulo: "Inovação Humana",
      desc: "Usamos a tecnologia como ponte para o desenvolvimento humano e profissional.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2
      className={
        "text-2xl font-bold mb-8 " +
        (dark ? "text-[#4ADE80]" : "text-[#15803D]")
      }
    >
      Nossos Valores
    </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {valores.map((v, i) => (
          <div
            key={i}
            className={
              "p-8 rounded-xl shadow-sm hover:shadow-md transition border " +
              (dark
                ? "bg-[#0F1E11] border-[#14532D]"
                : "bg-white border-gray-100")
            }
          >
            <h3
              className={
                "font-semibold mb-2 " +
                (dark ? "text-gray-100" : "text-gray-800")
              }
            >
              {v.titulo}
            </h3>
            <p
              className={
                "text-sm " +
                (dark ? "text-gray-300" : "text-gray-600")
              }
            >
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* === Seção interna: Métricas da comunidade === */
function CommunityMetrics({ dark }) {
  return (
    <section
      className={
        "py-16 " + (dark ? "bg-[#01140F] text-[#ECFDF5]" : "bg-[#022C22] text-[#ECFDF5]")
      }
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold">+2.500</h3>
          <p className="text-sm text-[#A7F3D0]">
            Profissionais conectados à nova economia verde.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">+180</h3>
          <p className="text-sm text-[#A7F3D0]">
            Projetos e iniciativas com impacto social.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">+60</h3>
          <p className="text-sm text-[#A7F3D0]">
            Empresas em busca de talentos com propósito.
          </p>
        </div>
      </div>
    </section>
  );
}

/* === Seção interna: Histórias de conexão === */
function StoriesSection({ dark }) {
  const stories = [
    {
      nome: "Mariana Souza",
      historia:
        "Encontrei meu parceiro de projeto na Lifonix e juntos criamos uma startup de impacto social.",
      cidade: "Curitiba/PR",
      imagem: "https://i.pravatar.cc/150?img=32",
    },
    {
      nome: "Lucas Andrade",
      historia:
        "Recebi minha primeira recomendação profissional aqui e consegui uma vaga remota em tecnologia verde!",
      cidade: "Belo Horizonte/MG",
      imagem: "https://i.pravatar.cc/150?img=56",
    },
    {
      nome: "Ana Clara Torres",
      historia:
        "A Lifonix me conectou com pessoas incríveis que compartilham os mesmos valores sobre o futuro do trabalho.",
      cidade: "São Paulo/SP",
      imagem: "https://i.pravatar.cc/150?img=47",
    },
  ];

  return (
    <section
      id="historias"
      className={
        "py-20 border-t transition-colors " +
        (dark
          ? "bg-[#0F1E11] border-[#14532D]"
          : "bg-[#F0FDF4] border-[#A7F3D0]")
      }
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className={
            "text-3xl font-bold mb-12 " +
            (dark ? "text-[#4ADE80]" : "text-[#15803D]")
          }
        >
          💚 Histórias de Conexão
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <div
              key={i}
              className={
                "p-6 rounded-xl shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center border " +
                (dark
                  ? "bg-[#1B2E1D] border-[#14532D]"
                  : "bg-white border-[#A7F3D0]")
              }
            >
              <img
                src={story.imagem}
                alt={story.nome}
                className={
                  "w-20 h-20 rounded-full mb-4 border-2 " +
                  (dark ? "border-[#4ADE80]" : "border-[#15803D]")
                }
              />
              <p
                className={
                  "italic mb-4 text-center " +
                  (dark ? "text-gray-200" : "text-gray-700")
                }
              >
                “{story.historia}”
              </p>
              <h3
                className={
                  "font-semibold " +
                  (dark ? "text-[#4ADE80]" : "text-[#15803D]")
                }
              >
                {story.nome}
              </h3>
              <span
                className={
                  "text-sm " +
                  (dark ? "text-gray-400" : "text-gray-500")
                }
              >
                {story.cidade}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Home principal ================== */
export default function Home() {
  const navigate = useNavigate();

  const [dark, setDark] = useState(false);

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
  const [onlyRecommended, setOnlyRecommended] = useState(false);
  const [loadingProfiles, setLoadingProfiles] = useState(false);

  useEffect(() => {
    async function carregarPerfis() {
      try {
        setLoadingProfiles(true);
        const url = onlyRecommended
          ? "http://localhost:5000/api/recomendacoes"
          : "http://localhost:5000/api/profissionais";

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
    <div
      className={
        "min-h-screen flex flex-col transition-colors duration-500 " +
        (dark ? "bg-[#0B1A0D] text-gray-100" : "bg-white text-gray-900")
      }
    >
      {/* Botão de tema na Home */}
      <div className="w-full flex justify-end px-6 pt-4">
        <button
          type="button"
          onClick={() => setDark((prev) => !prev)}
          className={
            "px-4 py-2 text-sm rounded-full border shadow-sm transition " +
            (dark
              ? "bg-[#0F1E11] border-[#14532D] text-gray-100"
              : "bg-white border-gray-200 text-gray-700")
          }
        >
          {dark ? "Modo claro" : "Modo escuro"}
        </button>
      </div>

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
        <h1
          className={
            "text-3xl font-bold " +
            (dark ? "text-[#4ADE80]" : "text-[#15803D]")
          }
        >
          Conecte-se ao futuro do trabalho
        </h1>
        <p
          className={
            "mt-3 max-w-xl mx-auto " +
            (dark ? "text-gray-300" : "text-gray-600")
          }
        >
          Descubra talentos e propósitos na plataforma GreenHub — feita para unir
          tecnologia, propósito e pessoas.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setMostrar(!mostrar)}
            className="px-6 py-3 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-medium transition shadow-sm"
          >
            {mostrar ? "Ocultar profissionais" : "Explorar profissionais"}
          </button>

          <button
            onClick={() => navigate("/create-profile")}
            className="px-6 py-3 rounded-full bg-[#15803D] hover:bg-[#166534] text-white font-medium transition shadow-sm"
          >
            Criar Seu Perfil
          </button>

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
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <SearchFilter
            profiles={profiles}
            filters={filters}
            setFilters={setFilters}
          />

          <div className="flex justify-center mt-4">
            <button
              onClick={() => setOnlyRecommended((prev) => !prev)}
              className={
                "inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium border transition " +
                (onlyRecommended
                  ? "bg-[#22C55E] text-white border-[#16A34A]"
                  : dark
                  ? "bg-[#0F1E11] text-gray-300 border-[#14532D]"
                  : "bg-white text-gray-700 border-[#D1FAE5]")
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

      {/* Seções internas */}
      <TrendingSkills dark={dark} />
      <ValuesSection dark={dark} />
      <CommunityMetrics dark={dark} />
      <StoriesSection dark={dark} />

      {/* Modais */}
      {selectedProfile && (
        <ProfileModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
          onRecommend={() => {}}
        />
      )}
      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} setUser={setUser} />
      )}

      <Footer />
    </div>
  );
}

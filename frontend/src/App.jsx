import React, { useEffect, useMemo, useState, useRef } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchFilter from "./components/SearchFilter";
import ProfileCard from "./components/ProfileCard";
import ProfileModal from "./components/ProfileModal";

/*
  App:
  - Hero (intro) visible on load
  - "Explorar profissionais" button scrolls to listings
  - Fetches /api/profissionais and builds dropdown values
  - Filters/search applied client-side
*/

export default function App() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [areaFilter, setAreaFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [techFilter, setTechFilter] = useState("");

  const [selectedProfile, setSelectedProfile] = useState(null);

  // control whether to show listing (user must click Explore)
  const [showListing, setShowListing] = useState(false);

  const listRef = useRef(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/profissionais");
        setProfiles(res.data);
      } catch (err) {
        console.error(err);
        setError("Não foi possível carregar os perfis. Verifique o backend.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfiles();
  }, []);

  // derive filter options
  const areas = useMemo(() => {
    return Array.from(new Set(profiles.map((p) => p.area).filter(Boolean))).sort();
  }, [profiles]);

  const cities = useMemo(() => {
    return Array.from(new Set(profiles.map((p) => p.localizacao).filter(Boolean))).sort();
  }, [profiles]);

  const techs = useMemo(() => {
    return Array.from(new Set(profiles.flatMap((p) => p.habilidadesTecnicas || []).filter(Boolean))).sort();
  }, [profiles]);

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return profiles.filter((p) => {
      if (q) {
        const comb =
          (p.nome || "") + " " + (p.cargo || "") + " " + (p.resumo || "") + " " + ((p.habilidadesTecnicas || []).join(" "));
        if (!comb.toLowerCase().includes(q)) return false;
      }
      if (areaFilter && p.area !== areaFilter) return false;
      if (cityFilter && p.localizacao !== cityFilter) return false;
      if (techFilter && !(p.habilidadesTecnicas || []).includes(techFilter)) return false;
      return true;
    });
  }, [profiles, searchTerm, areaFilter, cityFilter, techFilter]);

  const handleExplore = () => {
    setShowListing(true);
    // scroll to listing
    setTimeout(() => {
      listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Carregando profissionais...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#08101a]">
      <Header search={searchTerm} setSearch={setSearchTerm} />

      {/* Hero */}
      <section className="hero-bg py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white dark:bg-[#071226] rounded-2xl shadow-md p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                Conecte-se ao futuro do trabalho
              </h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Explore talentos, competências e propósito. Lifonix Network ajuda você a descobrir profissionais alinhados às suas necessidades.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={handleExplore}
                  className="px-5 py-2 rounded-full bg-white border border-gray-200 hover:shadow-md text-sm font-medium"
                >
                  Explorar profissionais
                </button>

                <a
                  href="#dica"
                  className="px-5 py-2 rounded-full bg-[var(--accent)] text-white text-sm font-medium"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Ver dicas
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              {/* small illustrative card grid */}
              <div className="grid grid-cols-2 gap-4">
                {profiles.slice(0, 4).map((p) => (
                  <div key={p.id} className="bg-gray-50 dark:bg-[#071a2a] rounded-xl p-3 flex items-center gap-3 border">
                    <img src={p.foto} alt={p.nome} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-semibold">{p.nome.split(" ")[0]}</div>
                      <div className="text-xs text-gray-500">{p.cargo}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="dica" className="mt-6 text-sm text-gray-500">
            Dica: Use a busca e os filtros para localizar profissionais por área, cidade ou tecnologia.
          </div>
        </div>
      </section>

      {/* Listing + filters */}
      <section ref={listRef} className={`max-w-7xl mx-auto px-6 pb-24 ${showListing ? "pt-8" : "pt-6"}`}>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-72 bg-white dark:bg-[#071226] rounded-2xl p-4 border">
            <SearchFilter
              areas={areas}
              cities={cities}
              techs={techs}
              areaFilter={areaFilter}
              cityFilter={cityFilter}
              techFilter={techFilter}
              setAreaFilter={setAreaFilter}
              setCityFilter={setCityFilter}
              setTechFilter={setTechFilter}
              setSearch={setSearchTerm}
            />
          </div>

          <div className="flex-1">
            {!showListing && (
              <div className="bg-white dark:bg-[#071226] p-6 rounded-2xl border">
                <p className="text-gray-700 dark:text-gray-200">Clique em “Explorar profissionais” para ver a lista completa.</p>
              </div>
            )}

            {showListing && (
              <>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filtered.length === 0 ? (
                    <div className="col-span-full p-6 bg-white dark:bg-[#071226] rounded-2xl border">
                      <p className="text-gray-600 dark:text-gray-300">Nenhum profissional encontrado com esses filtros.</p>
                    </div>
                  ) : (
                    filtered.map((p) => (
                      <div key={p.id} className="card-focus">
                        <ProfileCard profile={p} onClick={() => setSelectedProfile(p)} />
                      </div>
                    ))
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-6 pb-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Lifonix — Conectando pessoas, competências e propósito.
      </footer>

      {selectedProfile && (
        <ProfileModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  );
}

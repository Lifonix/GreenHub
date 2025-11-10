import React, { useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchFilters from "./components/SearchFilters";
import ProfileCard from "./components/ProfileCard";
import ProfileModal from "./components/ProfileModal";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 10000,
});

export default function App() {
  const [profissionais, setProfissionais] = useState([]);
  const [busca, setBusca] = useState("");
  const [filtros, setFiltros] = useState({ area: "", cidade: "", tech: "" });
  const [selecionado, setSelecionado] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  // Alternar modo escuro
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Gerar parâmetros dinâmicos para busca
  const params = useMemo(() => {
    const p = {};
    if (busca) p.q = busca;
    if (filtros.area) p.area = filtros.area;
    if (filtros.cidade) p.cidade = filtros.cidade;
    if (filtros.tech) p.tech = filtros.tech;
    return p;
  }, [busca, filtros]);

  // Função para buscar profissionais
  const carregarProfissionais = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/profissionais", { params });
      setProfissionais(data);
    } catch (error) {
      console.error("Erro ao buscar profissionais:", error);
      alert("Falha ao carregar os profissionais. Verifique o backend.");
    } finally {
      setLoading(false);
    }
  }, [params]);

  // Atualiza automaticamente ao mudar busca/filtros
  useEffect(() => {
    carregarProfissionais();
  }, [carregarProfissionais]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Cabeçalho */}
      <Header dark={darkMode} setDark={setDarkMode} />

      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Filtros e busca */}
        <SearchFilters
          busca={busca}
          setBusca={setBusca}
          filtros={filtros}
          setFiltros={setFiltros}
        />

        {/* Cabeçalho da lista */}
        <div className="flex justify-between items-center mt-6 mb-3">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Profissionais
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {loading
              ? "Carregando..."
              : `${profissionais.length} ${
                  profissionais.length === 1 ? "encontrado" : "encontrados"
                }`}
          </span>
        </div>

        {/* Conteúdo */}
        {loading ? (
          <div className="flex flex-col justify-center items-center py-20 text-gray-500 dark:text-gray-400 animate-pulse">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3"></div>
            <p>Carregando profissionais...</p>
          </div>
        ) : profissionais.length === 0 ? (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400">
            Nenhum profissional encontrado 😕
          </div>
        ) : (
          <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4">
            {profissionais.map((p) => (
              <ProfileCard
                key={p.id}
                profile={p}
                onOpen={() => setSelecionado(p)}
              />
            ))}
          </section>
        )}

        {/* Modal de detalhes */}
        {selecionado && (
          <ProfileModal
            profile={selecionado}
            onClose={() => setSelecionado(null)}
            onRecommend={() =>
              alert(`Você recomendou ${selecionado.nome}`)
            }
            onMessage={(mensagemEnviada) => {
              if (mensagemEnviada && mensagemEnviada.trim() !== "") {
                alert(`Mensagem enviada para ${selecionado.nome}`);
              } else {
                alert("Digite uma mensagem antes de enviar.");
              }
            }}
          />
        )}
      </main>

      {/* Rodapé */}
      <footer className="py-6 mt-10 text-center text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-800">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Lifonix
          </span>{" "}
          — Conectando Profissionais do Futuro 🚀
        </p>
      </footer>
    </div>
  );
}

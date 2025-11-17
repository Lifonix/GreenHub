import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Função para traduzir erros da API em mensagens amigáveis
function mapearErroPerfil(err) {
  const backendMsg =
    err?.response?.data?.error || err?.response?.data?.message || "";
  const status = err?.response?.status;
  const lower = (backendMsg || "").toLowerCase();

  if (status === 400 && lower.includes("idioma")) {
    return "Revise o preenchimento dos idiomas. Certifique-se de informar o idioma e o nível (por exemplo: Inglês – Avançado).";
  }

  if (status === 400 && lower.includes("dados incompletos")) {
    return "Alguns dados obrigatórios do perfil não foram preenchidos. Confira nome, área e resumo antes de salvar.";
  }

  if (status === 409 && lower.includes("perfil") && lower.includes("já existe")) {
    return "Você já possui um perfil criado. Edite o perfil existente em vez de criar um novo.";
  }

  if (err.code === "ERR_NETWORK") {
    return "Não foi possível se conectar ao servidor da Lifonix. Verifique sua conexão com a internet e tente novamente.";
  }

  if (backendMsg) {
    return backendMsg;
  }

  return "Não foi possível criar o perfil agora. Revise as informações e tente novamente em alguns minutos.";
}

export default function CreateProfiles() {
  const navigate = useNavigate();

  // Tema local da página (claro/escuro)
  const [darkLocal, setDarkLocal] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    foto: "",
    cargo: "",
    resumo: "",
    localizacao: "",
    area: "",
    habilidadesTecnicas: [],
    softSkills: [],
    experiencias: [],
    formacao: [],
    projetos: [],
    certificacoes: [],
    idiomas: [],
    areaInteresses: [],
  });

  const [novaHabilidade, setNovaHabilidade] = useState("");
  const [novaSoftSkill, setNovaSoftSkill] = useState("");
  const [novaExperiencia, setNovaExperiencia] = useState({
    empresa: "",
    cargo: "",
    inicio: "",
    fim: "",
    descricao: "",
  });
  const [novaFormacao, setNovaFormacao] = useState({
    curso: "",
    instituicao: "",
    ano: "",
  });
  const [novoProjeto, setNovoProjeto] = useState({
    titulo: "",
    link: "",
    descricao: "",
  });
  const [novoIdioma, setNovoIdioma] = useState({ idioma: "", nivel: "" });
  const [novoInteresse, setNovoInteresse] = useState("");
  const [novaCertificacao, setNovaCertificacao] = useState("");

  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const addItem = (key, value, resetFn) => {
    if (!value) return;

    if (typeof value === "string") {
      if (value.trim() === "") return;
      setForm({ ...form, [key]: [...form[key], value.trim()] });
      resetFn();
      return;
    }

    if (Object.values(value).every((v) => v !== "")) {
      setForm({ ...form, [key]: [...form[key], value] });
      resetFn();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagemErro("");
    setMensagemSucesso("");
    setCarregando(true);

    try {
      await axios.post("/api/perfis", form);

      setMensagemSucesso("Perfil criado com sucesso! 🎉");
      setMensagemErro("");

      setForm({
        nome: "",
        foto: "",
        cargo: "",
        resumo: "",
        localizacao: "",
        area: "",
        habilidadesTecnicas: [],
        softSkills: [],
        experiencias: [],
        formacao: [],
        projetos: [],
        certificacoes: [],
        idiomas: [],
        areaInteresses: [],
      });
      setNovaHabilidade("");
      setNovaSoftSkill("");
      setNovaExperiencia({
        empresa: "",
        cargo: "",
        inicio: "",
        fim: "",
        descricao: "",
      });
      setNovaFormacao({ curso: "", instituicao: "", ano: "" });
      setNovoProjeto({ titulo: "", link: "", descricao: "" });
      setNovoIdioma({ idioma: "", nivel: "" });
      setNovoInteresse("");
      setNovaCertificacao("");
    } catch (err) {
      console.error(err);
      const mensagem = mapearErroPerfil(err);
      setMensagemErro(mensagem);
      setMensagemSucesso("");
    } finally {
      setCarregando(false);
    }
  };

  const rootBg = darkLocal ? "bg-[#020617] text-gray-100" : "bg-gray-100 text-gray-900";

  const inputClass =
    "w-full p-3 rounded-lg border text-sm " +
    (darkLocal
      ? "bg-[#020f0a] border-[#1f5b39] text-gray-100 placeholder-gray-400 focus:ring-green-500"
      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-green-500") +
    " focus:outline-none focus:ring-2 transition";

  const cardClass =
    "p-6 rounded-2xl shadow-lg space-y-4 " +
    (darkLocal
      ? "bg-[#020617] border border-[#1f2937]"
      : "bg-white border border-gray-200");

  return (
    <div className={`min-h-screen ${rootBg} transition-colors duration-300 p-8`}>
      {/* Barra superior com voltar e tema */}
      <div className="max-w-5xl mx-auto flex items-center justify-between mb-6 gap-4">
        <button
          onClick={() => navigate("/")}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition flex items-center gap-2 text-sm"
        >
          ← Voltar para Home
        </button>

        <button
          type="button"
          onClick={() => setDarkLocal(!darkLocal)}
          className="px-4 py-2 rounded-full text-sm font-medium border border-gray-300/60 hover:border-green-400 hover:text-green-400 transition bg-black/5"
        >
          {darkLocal ? "Modo claro" : "Modo escuro"}
        </button>
      </div>

      <h1 className="text-3xl font-bold text-center mb-4 text-green-600 dark:text-[#4ADE80]">
        Crie seu Perfil Profissional
      </h1>
      <p
        className={
          "text-center mb-6 " +
          (darkLocal ? "text-gray-300" : "text-gray-600")
        }
      >
        Construa um perfil completo para se destacar na comunidade GreenHub.
      </p>

      {/* Mensagens globais */}
      {mensagemSucesso && (
        <div
          className={
            "max-w-5xl mx-auto mb-4 rounded-lg px-4 py-3 text-sm border " +
            (darkLocal
              ? "bg-green-900/20 border-green-500/40 text-green-300"
              : "bg-green-50 border-green-200 text-green-700")
          }
        >
          {mensagemSucesso}
        </div>
      )}
      {mensagemErro && (
        <div
          className={
            "max-w-5xl mx-auto mb-4 rounded-lg px-4 py-3 text-sm border " +
            (darkLocal
              ? "bg-red-900/20 border-red-500/40 text-red-300"
              : "bg-red-50 border-red-200 text-red-700")
          }
        >
          {mensagemErro}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto space-y-10"
      >
        {/* Informações básicas */}
        <div className={cardClass}>
          <h2 className="text-xl font-semibold text-green-600 dark:text-[#4ADE80] mb-4">
            Informações Básicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="nome"
              placeholder="Nome"
              value={form.nome}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              name="foto"
              placeholder="Foto (URL)"
              value={form.foto}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              name="cargo"
              placeholder="Cargo"
              value={form.cargo}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              name="localizacao"
              placeholder="Localização"
              value={form.localizacao}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              name="area"
              placeholder="Área"
              value={form.area}
              onChange={handleChange}
              className={inputClass}
            />
            <textarea
              name="resumo"
              placeholder="Resumo"
              value={form.resumo}
              onChange={handleChange}
              className={inputClass + " md:col-span-2"}
            />
          </div>
        </div>

        {/* Habilidades técnicas e soft skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={cardClass}>
            <h2 className="text-xl font-semibold text-green-600 dark:text-[#4ADE80] mb-4">
              Habilidades Técnicas
            </h2>
            <div className="flex gap-2 mb-2">
              <input
                value={novaHabilidade}
                onChange={(e) => setNovaHabilidade(e.target.value)}
                placeholder="Nova habilidade"
                className={inputClass}
              />
              <button
                type="button"
                onClick={() =>
                  addItem("habilidadesTecnicas", novaHabilidade, () =>
                    setNovaHabilidade("")
                  )
                }
                className="bg-green-500 hover:bg-green-600 text-white px-4 rounded-lg transition text-sm"
              >
                Adicionar
              </button>
            </div>
            <p className={darkLocal ? "text-gray-300 text-sm" : "text-gray-600 text-sm"}>
              {form.habilidadesTecnicas.join(", ") || "Nenhuma adicionada"}
            </p>
          </div>

          <div className={cardClass}>
            <h2 className="text-xl font-semibold text-green-600 dark:text-[#4ADE80] mb-4">
              Soft Skills
            </h2>
            <div className="flex gap-2 mb-2">
              <input
                value={novaSoftSkill}
                onChange={(e) => setNovaSoftSkill(e.target.value)}
                placeholder="Nova soft skill"
                className={inputClass}
              />
              <button
                type="button"
                onClick={() =>
                  addItem("softSkills", novaSoftSkill, () =>
                    setNovaSoftSkill("")
                  )
                }
                className="bg-green-500 hover:bg-green-600 text-white px-4 rounded-lg transition text-sm"
              >
                Adicionar
              </button>
            </div>
            <p className={darkLocal ? "text-gray-300 text-sm" : "text-gray-600 text-sm"}>
              {form.softSkills.join(", ") || "Nenhuma adicionada"}
            </p>
          </div>
        </div>

        {/* Experiências, Formação e Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={cardClass}>
            <h2 className="text-xl font-semibold text-green-600 dark:text-[#4ADE80] mb-4">
              Experiências
            </h2>
            <input
              placeholder="Empresa"
              value={novaExperiencia.empresa}
              onChange={(e) =>
                setNovaExperiencia({
                  ...novaExperiencia,
                  empresa: e.target.value,
                })
              }
              className={inputClass}
            />
            <input
              placeholder="Cargo"
              value={novaExperiencia.cargo}
              onChange={(e) =>
                setNovaExperiencia({
                  ...novaExperiencia,
                  cargo: e.target.value,
                })
              }
              className={inputClass}
            />
            <input
              placeholder="Início"
              value={novaExperiencia.inicio}
              onChange={(e) =>
                setNovaExperiencia({
                  ...novaExperiencia,
                  inicio: e.target.value,
                })
              }
              className={inputClass}
            />
            <input
              placeholder="Fim"
              value={novaExperiencia.fim}
              onChange={(e) =>
                setNovaExperiencia({
                  ...novaExperiencia,
                  fim: e.target.value,
                })
              }
              className={inputClass}
            />
            <textarea
              placeholder="Descrição"
              value={novaExperiencia.descricao}
              onChange={(e) =>
                setNovaExperiencia({
                  ...novaExperiencia,
                  descricao: e.target.value,
                })
              }
              className={inputClass}
            />
            <button
              type="button"
              onClick={() =>
                addItem(
                  "experiencias",
                  novaExperiencia,
                  () =>
                    setNovaExperiencia({
                      empresa: "",
                      cargo: "",
                      inicio: "",
                      fim: "",
                      descricao: "",
                    })
                )
              }
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-2 w-full transition text-sm"
            >
              Adicionar Experiência
            </button>
          </div>

          <div className={cardClass}>
            <h2 className="text-xl font-semibold text-green-600 dark:text-[#4ADE80] mb-4">
              Formação
            </h2>
            <input
              placeholder="Curso"
              value={novaFormacao.curso}
              onChange={(e) =>
                setNovaFormacao({ ...novaFormacao, curso: e.target.value })
              }
              className={inputClass}
            />
            <input
              placeholder="Instituição"
              value={novaFormacao.instituicao}
              onChange={(e) =>
                setNovaFormacao({
                  ...novaFormacao,
                  instituicao: e.target.value,
                })
              }
              className={inputClass}
            />
            <input
              placeholder="Ano"
              value={novaFormacao.ano}
              onChange={(e) =>
                setNovaFormacao({ ...novaFormacao, ano: e.target.value })
              }
              className={inputClass}
            />
            <button
              type="button"
              onClick={() =>
                addItem(
                  "formacao",
                  novaFormacao,
                  () =>
                    setNovaFormacao({
                      curso: "",
                      instituicao: "",
                      ano: "",
                    })
                )
              }
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-2 w-full transition text-sm"
            >
              Adicionar Formação
            </button>
          </div>

          <div className={cardClass}>
            <h2 className="text-xl font-semibold text-green-600 dark:text-[#4ADE80] mb-4">
              Projetos
            </h2>
            <input
              placeholder="Título"
              value={novoProjeto.titulo}
              onChange={(e) =>
                setNovoProjeto({ ...novoProjeto, titulo: e.target.value })
              }
              className={inputClass}
            />
            <input
              placeholder="Link"
              value={novoProjeto.link}
              onChange={(e) =>
                setNovoProjeto({ ...novoProjeto, link: e.target.value })
              }
              className={inputClass}
            />
            <textarea
              placeholder="Descrição"
              value={novoProjeto.descricao}
              onChange={(e) =>
                setNovoProjeto({
                  ...novoProjeto,
                  descricao: e.target.value,
                })
              }
              className={inputClass}
            />
            <button
              type="button"
              onClick={() =>
                addItem(
                  "projetos",
                  novoProjeto,
                  () =>
                    setNovoProjeto({
                      titulo: "",
                      link: "",
                      descricao: "",
                    })
                )
              }
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-2 w-full transition text-sm"
            >
              Adicionar Projeto
            </button>
          </div>
        </div>

        {/* Idiomas, certificações e interesses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={cardClass}>
            <h2 className="text-xl font-semibold text-green-600 dark:text-[#4ADE80] mb-4">
              Idiomas
            </h2>
            <input
              placeholder="Idioma (ex: Inglês)"
              value={novoIdioma.idioma}
              onChange={(e) =>
                setNovoIdioma({ ...novoIdioma, idioma: e.target.value })
              }
              className={inputClass}
            />
            <input
              placeholder="Nível (ex: Avançado)"
              value={novoIdioma.nivel}
              onChange={(e) =>
                setNovoIdioma({ ...novoIdioma, nivel: e.target.value })
              }
              className={inputClass}
            />
            <button
              type="button"
              onClick={() =>
                addItem(
                  "idiomas",
                  novoIdioma,
                  () => setNovoIdioma({ idioma: "", nivel: "" })
                )
              }
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-2 w-full transition text-sm"
            >
              Adicionar Idioma
            </button>
            <p className={darkLocal ? "mt-2 text-gray-300 text-sm" : "mt-2 text-gray-600 text-sm"}>
              {form.idiomas.length
                ? form.idiomas
                    .map((i) => `${i.idioma} (${i.nivel})`)
                    .join(" • ")
                : "Nenhum idioma adicionado"}
            </p>
          </div>

          <div className={cardClass}>
            <h2 className="text-xl font-semibold text-green-600 dark:text-[#4ADE80] mb-4">
              Certificações
            </h2>
            <input
              placeholder="Nome da certificação"
              value={novaCertificacao}
              onChange={(e) => setNovaCertificacao(e.target.value)}
              className={inputClass}
            />
            <button
              type="button"
              onClick={() =>
                addItem(
                  "certificacoes",
                  novaCertificacao,
                  () => setNovaCertificacao("")
                )
              }
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-2 w-full transition text-sm"
            >
              Adicionar Certificação
            </button>
            <p className={darkLocal ? "mt-2 text-gray-300 text-sm" : "mt-2 text-gray-600 text-sm"}>
              {form.certificacoes.join(" • ") ||
                "Nenhuma certificação adicionada"}
            </p>
          </div>

          <div className={cardClass}>
            <h2 className="text-xl font-semibold text-green-600 dark:text-[#4ADE80] mb-4">
              Áreas de Interesse
            </h2>
            <input
              placeholder="Ex: ESG, Energia renovável..."
              value={novoInteresse}
              onChange={(e) => setNovoInteresse(e.target.value)}
              className={inputClass}
            />
            <button
              type="button"
              onClick={() =>
                addItem(
                  "areaInteresses",
                  novoInteresse,
                  () => setNovoInteresse("")
                )
              }
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-2 w-full transition text-sm"
            >
              Adicionar Interesse
            </button>
            <p className={darkLocal ? "mt-2 text-gray-300 text-sm" : "mt-2 text-gray-600 text-sm"}>
              {form.areaInteresses.join(" • ") ||
                "Nenhuma área de interesse adicionada"}
            </p>
          </div>
        </div>

        {/* Botão criar perfil */}
        <button
          type="submit"
          disabled={carregando}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full font-semibold text-xl transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {carregando ? "Salvando perfil..." : "Criar Perfil"}
        </button>
      </form>
    </div>
  );
}

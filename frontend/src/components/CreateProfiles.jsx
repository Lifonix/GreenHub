import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateProfiles() {
  const navigate = useNavigate();

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
  const [novaExperiencia, setNovaExperiencia] = useState({ empresa: "", cargo: "", inicio: "", fim: "", descricao: "" });
  const [novaFormacao, setNovaFormacao] = useState({ curso: "", instituicao: "", ano: "" });
  const [novoProjeto, setNovoProjeto] = useState({ titulo: "", link: "", descricao: "" });
  const [novoIdioma, setNovoIdioma] = useState({ idioma: "", nivel: "" });
  const [novoInteresse, setNovoInteresse] = useState("");
  const [novaCertificacao, setNovaCertificacao] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const addItem = (key, value, resetFn) => {
    if (value && Object.values(value).every(v => v !== "")) {
      setForm({ ...form, [key]: [...form[key], value] });
      resetFn();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/perfis", form);
      alert("Perfil criado com sucesso!");
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
    } catch (err) {
      console.error(err);
      alert("Erro ao criar perfil.");
    }
  };

  // Classes para inputs e cards
  const inputClass = "w-full p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition";
  const cardClass = "bg-white p-6 rounded-2xl shadow-lg space-y-4";

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Botão voltar */}
      <button
        onClick={() => navigate("/")}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition mb-6 flex items-center gap-2"
      >
        ← Voltar para Home
      </button>

      <h1 className="text-3xl font-bold text-center mb-10 text-green-600">Crie seu Perfil Profissional</h1>

      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-10">

        {/* Informações básicas */}
        <div className={cardClass}>
          <h2 className="text-xl font-semibold text-green-600 mb-4">Informações Básicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} className={inputClass} />
            <input name="foto" placeholder="Foto (URL)" value={form.foto} onChange={handleChange} className={inputClass} />
            <input name="cargo" placeholder="Cargo" value={form.cargo} onChange={handleChange} className={inputClass} />
            <input name="localizacao" placeholder="Localização" value={form.localizacao} onChange={handleChange} className={inputClass} />
            <input name="area" placeholder="Área" value={form.area} onChange={handleChange} className={inputClass} />
            <textarea name="resumo" placeholder="Resumo" value={form.resumo} onChange={handleChange} className={inputClass + " md:col-span-2"} />
          </div>
        </div>

        {/* Habilidades técnicas e soft skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={cardClass}>
            <h2 className="text-xl font-semibold text-green-600 mb-4">Habilidades Técnicas</h2>
            <div className="flex gap-2 mb-2">
              <input value={novaHabilidade} onChange={(e) => setNovaHabilidade(e.target.value)} placeholder="Nova habilidade" className={inputClass} />
              <button type="button" onClick={() => addItem("habilidadesTecnicas", novaHabilidade, () => setNovaHabilidade(""))} className="bg-green-500 hover:bg-green-600 text-white px-4 rounded-lg transition">Adicionar</button>
            </div>
            <p className="text-gray-600">{form.habilidadesTecnicas.join(", ") || "Nenhuma adicionada"}</p>
          </div>

          <div className={cardClass}>
            <h2 className="text-xl font-semibold text-green-600 mb-4">Soft Skills</h2>
            <div className="flex gap-2 mb-2">
              <input value={novaSoftSkill} onChange={(e) => setNovaSoftSkill(e.target.value)} placeholder="Nova soft skill" className={inputClass} />
              <button type="button" onClick={() => addItem("softSkills", novaSoftSkill, () => setNovaSoftSkill(""))} className="bg-green-500 hover:bg-green-600 text-white px-4 rounded-lg transition">Adicionar</button>
            </div>
            <p className="text-gray-600">{form.softSkills.join(", ") || "Nenhuma adicionada"}</p>
          </div>
        </div>

        {/* Experiências, Formação e Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={cardClass}>
            <h2 className="text-xl font-semibold text-green-600 mb-4">Experiências</h2>
            <input placeholder="Empresa" value={novaExperiencia.empresa} onChange={(e) => setNovaExperiencia({ ...novaExperiencia, empresa: e.target.value })} className={inputClass} />
            <input placeholder="Cargo" value={novaExperiencia.cargo} onChange={(e) => setNovaExperiencia({ ...novaExperiencia, cargo: e.target.value })} className={inputClass} />
            <input placeholder="Início" value={novaExperiencia.inicio} onChange={(e) => setNovaExperiencia({ ...novaExperiencia, inicio: e.target.value })} className={inputClass} />
            <input placeholder="Fim" value={novaExperiencia.fim} onChange={(e) => setNovaExperiencia({ ...novaExperiencia, fim: e.target.value })} className={inputClass} />
            <textarea placeholder="Descrição" value={novaExperiencia.descricao} onChange={(e) => setNovaExperiencia({ ...novaExperiencia, descricao: e.target.value })} className={inputClass} />
            <button type="button" onClick={() => addItem("experiencias", novaExperiencia, () => setNovaExperiencia({ empresa: "", cargo: "", inicio: "", fim: "", descricao: "" }))} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-2 w-full transition">Adicionar Experiência</button>
          </div>

          <div className={cardClass}>
            <h2 className="text-xl font-semibold text-green-600 mb-4">Formação</h2>
            <input placeholder="Curso" value={novaFormacao.curso} onChange={(e) => setNovaFormacao({ ...novaFormacao, curso: e.target.value })} className={inputClass} />
            <input placeholder="Instituição" value={novaFormacao.instituicao} onChange={(e) => setNovaFormacao({ ...novaFormacao, instituicao: e.target.value })} className={inputClass} />
            <input placeholder="Ano" value={novaFormacao.ano} onChange={(e) => setNovaFormacao({ ...novaFormacao, ano: e.target.value })} className={inputClass} />
            <button type="button" onClick={() => addItem("formacao", novaFormacao, () => setNovaFormacao({ curso: "", instituicao: "", ano: "" }))} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-2 w-full transition">Adicionar Formação</button>
          </div>

          <div className={cardClass}>
            <h2 className="text-xl font-semibold text-green-600 mb-4">Projetos</h2>
            <input placeholder="Título" value={novoProjeto.titulo} onChange={(e) => setNovoProjeto({ ...novoProjeto, titulo: e.target.value })} className={inputClass} />
            <input placeholder="Link" value={novoProjeto.link} onChange={(e) => setNovoProjeto({ ...novoProjeto, link: e.target.value })} className={inputClass} />
            <textarea placeholder="Descrição" value={novoProjeto.descricao} onChange={(e) => setNovoProjeto({ ...novoProjeto, descricao: e.target.value })} className={inputClass} />
            <button type="button" onClick={() => addItem("projetos", novoProjeto, () => setNovoProjeto({ titulo: "", link: "", descricao: "" }))} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-2 w-full transition">Adicionar Projeto</button>
          </div>
        </div>

        {/* Botão criar perfil */}
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full font-semibold text-xl transition">Criar Perfil</button>
      </form>
    </div>
  );
}

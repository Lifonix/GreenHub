// src/pages/CadastroEmpresa.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CadastroEmpresa() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nomeEmpresa: "",
    cnpj: "",
    email: "",
    telefone: "",
    site: "",
    setor: "",
    tamanho: "",
    descricao: "",
    senha: "",
    semSite: false, // 👈 nova flag
  });

  const [msg, setMsg] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "semSite" && checked ? { site: "" } : {}),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setMsg("");
    setLoading(true);

    try {
      const payload = { ...form };
      // se não tiver site, você pode remover o campo na hora de enviar, se quiser:
      if (payload.semSite) {
        delete payload.site;
      }

      const res = await axios.post("http://localhost:5000/api/empresas", payload);

      setMsg(res.data?.message || "Empresa cadastrada com sucesso!");
      setErro("");
      setLoading(false);

      setTimeout(() => navigate("/empresas"), 1200);
    } catch (error) {
      const backendMsg = error.response?.data?.error || error.response?.data?.message;
      setErro(
        backendMsg || "Erro ao cadastrar empresa. Verifique os dados e tente novamente."
      );
      setMsg("");
      setLoading(false);
      console.error("Erro no cadastro da empresa:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#020d06] text-white py-10 px-4">
      {/* Barra superior com botão voltar */}
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-6">
        <button
          onClick={() => navigate("/empresas")}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#022c22] border border-[#22C55E]/50 hover:bg-[#065f46] text-sm font-medium text-emerald-100 transition"
        >
          <span>←</span>
          <span>Voltar para Empresas</span>
        </button>

        <span className="hidden sm:inline-flex items-center gap-2 text-xs text-emerald-200/80">
          <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
          Ambiente seguro e criptografado para dados corporativos
        </span>
      </div>

      {/* Container principal em duas colunas */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr] gap-8 items-stretch">
        {/* Lado esquerdo: hero / texto institucional */}
        <aside className="hidden lg:flex flex-col justify-between rounded-3xl bg-gradient-to-b from-[#052e16] via-[#064e3b] to-[#022c22] border border-[#14532D] shadow-[0_0_60px_rgba(0,0,0,0.8)] p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">
              GreenHub • Lifonix
            </p>
            <h1 className="mt-4 text-3xl font-extrabold text-[#4ADE80] leading-snug">
              Cadastro de Empresa
            </h1>
            <p className="mt-3 text-sm text-emerald-100/85 max-w-md">
              Traga sua organização para um ecossistema que conecta tecnologia,
              propósito e impacto socioambiental. Cadastre-se para acessar talentos
              e métricas inteligentes sobre o futuro do trabalho.
            </p>
          </div>

          <div className="mt-8 space-y-4 text-sm text-emerald-100/85">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-[#22C55E]/20 flex items-center justify-center text-[#4ADE80] text-xs">
                ✓
              </span>
              <p>
                Visibilidade como empresa comprometida com sustentabilidade e
                bem-estar das pessoas.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-[#22C55E]/20 flex items-center justify-center text-[#4ADE80] text-xs">
                ✓
              </span>
              <p>
                Acesso a profissionais alinhados ao propósito da sua empresa e aos
                projetos da GreenHub.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-[#22C55E]/20 flex items-center justify-center text-[#4ADE80] text-xs">
                ✓
              </span>
              <p>
                Métricas para acompanhar reputação, engajamento e impacto do seu
                time dentro da plataforma.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-emerald-800/70 pt-4 text-xs text-emerald-200/75">
            <p>
              Dica: utilize um e-mail corporativo e uma descrição clara da sua
              atuação para aumentar a confiança de talentos e parceiros.
            </p>
          </div>
        </aside>

        {/* Lado direito: card de formulário premium */}
        <div className="rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.9)] p-6 sm:p-8">
          {/* Header mobile */}
          <div className="lg:hidden mb-6">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">
              GreenHub • Lifonix
            </p>
            <h1 className="mt-3 text-2xl font-extrabold text-[#4ADE80]">
              Cadastro de Empresa
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              Registre sua empresa na Lifonix e conecte-se aos melhores talentos
              do futuro.
            </p>
          </div>

          {/* Formulário */}
          <form
            onSubmit={handleSubmit}
            className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Nome da empresa */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-gray-300 mb-1">
                Nome da Empresa
              </label>
              <input
                type="text"
                name="nomeEmpresa"
                required
                value={form.nomeEmpresa}
                onChange={handleChange}
                className="p-3 rounded-xl bg-[#020f0a] border border-[#1f5b39] text-white text-sm outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E]"
              />
            </div>

            {/* CNPJ */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-gray-300 mb-1">
                CNPJ
              </label>
              <input
                type="text"
                name="cnpj"
                required
                value={form.cnpj}
                onChange={handleChange}
                className="p-3 rounded-xl bg-[#020f0a] border border-[#1f5b39] text-white text-sm outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E]"
              />
            </div>

            {/* E-mail */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-gray-300 mb-1">
                E-mail Corporativo
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="p-3 rounded-xl bg-[#020f0a] border border-[#1f5b39] text-white text-sm outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E]"
              />
            </div>

            {/* Telefone */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-gray-300 mb-1">
                Telefone
              </label>
              <input
                type="text"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                className="p-3 rounded-xl bg-[#020f0a] border border-[#1f5b39] text-white text-sm outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E]"
              />
            </div>

            {/* Site + opção sem site */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-gray-300 mb-1">
                Site (opcional)
              </label>
              <input
                type="text"
                name="site"
                placeholder="https://suaempresa.com"
                value={form.site}
                onChange={handleChange}
                disabled={form.semSite}
                className={`p-3 rounded-xl bg-[#020f0a] border border-[#1f5b39] text-white text-sm outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E] ${
                  form.semSite ? "opacity-40 cursor-not-allowed" : ""
                }`}
              />
              <label className="mt-2 flex items-center gap-2 text-[11px] text-gray-400">
                <input
                  type="checkbox"
                  name="semSite"
                  checked={form.semSite}
                  onChange={handleChange}
                  className="h-3 w-3 rounded border-[#1f5b39] bg-[#020f0a]"
                />
                Minha empresa ainda não possui site
              </label>
            </div>

            {/* Setor */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-gray-300 mb-1">
                Setor de Atuação
              </label>
              <input
                type="text"
                name="setor"
                required
                value={form.setor}
                onChange={handleChange}
                className="p-3 rounded-xl bg-[#020f0a] border border-[#1f5b39] text-white text-sm outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E]"
              />
            </div>

            {/* Tamanho */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-xs font-medium text-gray-300 mb-1">
                Tamanho da Empresa
              </label>
              <select
                name="tamanho"
                required
                value={form.tamanho}
                onChange={handleChange}
                className="p-3 rounded-xl bg-[#020f0a] border border-[#1f5b39] text-white text-sm outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E]"
              >
                <option value="" disabled>
                  Selecione...
                </option>
                <option value="pequena">Pequena</option>
                <option value="media">Média</option>
                <option value="grande">Grande</option>
              </select>
            </div>

            {/* Descrição */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-xs font-medium text-gray-300 mb-1">
                Descrição da Empresa
              </label>
              <textarea
                name="descricao"
                rows="4"
                required
                value={form.descricao}
                onChange={handleChange}
                className="p-3 rounded-xl bg-[#020f0a] border border-[#1f5b39] text-white text-sm outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E]"
              ></textarea>
              <span className="mt-1 text-[11px] text-gray-400">
                Dica: destaque suas ações sustentáveis, cultura interna e projetos de impacto.
              </span>
            </div>

            {/* Senha */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-xs font-medium text-gray-300 mb-1">
                Senha de Acesso
              </label>
              <input
                type="password"
                name="senha"
                required
                value={form.senha}
                onChange={handleChange}
                className="p-3 rounded-xl bg-[#020f0a] border border-[#1f5b39] text-white text-sm outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E]"
              />
              <span className="mt-1 text-[11px] text-gray-400">
                Use uma senha forte. Você poderá alterar essas informações depois no painel.
              </span>
            </div>

            {/* Mensagens */}
            {msg && (
              <p className="text-center text-green-400 font-semibold md:col-span-2 text-sm">
                {msg}
              </p>
            )}
            {erro && (
              <p className="text-center text-red-400 font-semibold md:col-span-2 text-sm">
                {erro}
              </p>
            )}

            {/* Botão */}
            <div className="md:col-span-2 flex justify-center mt-2">
              <button
                type="submit"
                className="px-10 py-3 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white text-sm sm:text-base font-semibold shadow-[0_0_25px_rgba(34,197,94,0.6)] transition disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "Cadastrando..." : "Cadastrar Empresa"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

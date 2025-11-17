// src/pages/CadastroEmpresa.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Função para traduzir erros da API em mensagens amigáveis (erros de backend)
function mapearErroCadastro(error) {
  const backendMsg =
    error?.response?.data?.error || error?.response?.data?.message || "";
  const status = error?.response?.status;
  const lower = backendMsg.toLowerCase();

  if (status === 409 || (lower.includes("cnpj") && lower.includes("já existe"))) {
    return "Este CNPJ já está cadastrado na GreenHub. Verifique os dados ou utilize outro CNPJ.";
  }

  if (lower.includes("email") && lower.includes("já existe")) {
    return "Já existe uma conta com este e-mail corporativo. Tente outro e-mail ou recupere o acesso.";
  }

  if (lower.includes("cnpj inválido") || lower.includes("cnpj invalido")) {
    return "O CNPJ informado parece inválido. Confira o número e tente novamente.";
  }

  if (lower.includes("campos obrigatórios") || lower.includes("dados incompletos")) {
    return "Alguns campos obrigatórios não foram preenchidos corretamente. Revise os campos destacados.";
  }

  if (error.code === "ERR_NETWORK") {
    return "Não foi possível se conectar ao servidor do GreenHub. Verifique sua conexão e tente novamente em alguns instantes.";
  }

  if (backendMsg) {
    return backendMsg;
  }

  return "Não foi possível concluir o cadastro agora. Revise os dados e tente novamente em alguns minutos.";
}

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
    semSite: false,
  });

  // Erros por campo
  const [erros, setErros] = useState({});
  const [msg, setMsg] = useState("");
  const [erroGeral, setErroGeral] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "semSite" && checked ? { site: "" } : {}),
    }));

    // Apaga erro daquele campo conforme a pessoa digita
    if (erros[name]) {
      setErros((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validação local do formulário
  const validarForm = () => {
    const novosErros = {};

    if (!form.nomeEmpresa.trim()) {
      novosErros.nomeEmpresa = "Informe o nome da empresa.";
    }

    if (!form.cnpj.trim()) {
      novosErros.cnpj = "Informe o CNPJ.";
    } else if (!/^\d{14}$/.test(form.cnpj.replace(/\D/g, ""))) {
      novosErros.cnpj = "Digite um CNPJ com 14 números (apenas dígitos).";
    }

    if (!form.email.trim()) {
      novosErros.email = "Informe um e-mail corporativo.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      novosErros.email = "Digite um e-mail válido.";
    }

    if (!form.setor.trim()) {
      novosErros.setor = "Informe o setor de atuação.";
    }

    if (!form.tamanho) {
      novosErros.tamanho = "Selecione o tamanho da empresa.";
    }

    if (!form.descricao.trim()) {
      novosErros.descricao = "Descreva brevemente a empresa.";
    }

    if (!form.senha.trim()) {
      novosErros.senha = "Defina uma senha de acesso.";
    } else if (form.senha.length < 6) {
      novosErros.senha = "A senha deve ter pelo menos 6 caracteres.";
    }

    // Site só é obrigatório se 'semSite' for falso
    if (!form.semSite && form.site.trim() && !/^https?:\/\//i.test(form.site)) {
      novosErros.site = "Inclua http:// ou https:// no endereço do site.";
    }

    return novosErros;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErroGeral("");
    setMsg("");

    // validação local
    const novosErros = validarForm();
    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return; // não envia para o backend
    }

    setLoading(true);

    try {
      const payload = { ...form };
      if (payload.semSite) {
        delete payload.site;
      }

      const res = await axios.post(
        "http://localhost:5000/api/empresas",
        payload
      );

      setMsg(res.data?.message || "Empresa cadastrada com sucesso!");
      setErroGeral("");
      setLoading(false);

      setTimeout(() => navigate("/empresas"), 1200);
    } catch (error) {
      console.error("Erro no cadastro da empresa:", error);

      const mensagemAmigavel = mapearErroCadastro(error);
      setErroGeral(mensagemAmigavel);
      setMsg("");
      setLoading(false);
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

      {/* Mensagem geral de erro (backend) */}
      {erroGeral && (
        <div className="max-w-6xl mx-auto mb-4 rounded-lg bg-red-900/20 border border-red-500/40 text-red-300 px-4 py-3 text-sm">
          {erroGeral}
        </div>
      )}
      {msg && (
        <div className="max-w-6xl mx-auto mb-4 rounded-lg bg-emerald-900/20 border border-emerald-500/40 text-emerald-200 px-4 py-3 text-sm">
          {msg}
        </div>
      )}

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
            noValidate
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
                value={form.nomeEmpresa}
                onChange={handleChange}
                className="p-3 rounded-xl bg-[#020f0a] border border-[#1f5b39] text-white text-sm outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E]"
              />
              {erros.nomeEmpresa && (
                <span className="mt-1 text-[11px] text-red-400">
                  {erros.nomeEmpresa}
                </span>
              )}
            </div>

            {/* CNPJ */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-gray-300 mb-1">
                CNPJ
              </label>
              <input
                type="text"
                name="cnpj"
                value={form.cnpj}
                onChange={handleChange}
                className="p-3 rounded-xl bg-[#020f0a] border border-[#1f5b39] text-white text-sm outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E]"
              />
              {erros.cnpj && (
                <span className="mt-1 text-[11px] text-red-400">
                  {erros.cnpj}
                </span>
              )}
            </div>

            {/* E-mail */}
            <div className="flex flex-col">
              <label className="text-xs font-medium text-gray-300 mb-1">
                E-mail Corporativo
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="p-3 rounded-xl bg-[#020f0a] border border-[#1f5b39] text-white text-sm outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E]"
              />
              {erros.email && (
                <span className="mt-1 text-[11px] text-red-400">
                  {erros.email}
                </span>
              )}
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
              {erros.site && (
                <span className="mt-1 text-[11px] text-red-400">
                  {erros.site}
                </span>
              )}
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
                value={form.setor}
                onChange={handleChange}
                className="p-3 rounded-xl bg-[#020f0a] border border-[#1f5b39] text-white text-sm outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E]"
              />
              {erros.setor && (
                <span className="mt-1 text-[11px] text-red-400">
                  {erros.setor}
                </span>
              )}
            </div>

            {/* Tamanho */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-xs font-medium text-gray-300 mb-1">
                Tamanho da Empresa
              </label>
              <select
                name="tamanho"
                value={form.tamanho}
                onChange={handleChange}
                className="p-3 rounded-xl bg-[#020f0a] border border-[#1f5b39] text-white text-sm outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E]"
              >
                <option value="">Selecione...</option>
                <option value="pequena">Pequena</option>
                <option value="media">Média</option>
                <option value="grande">Grande</option>
              </select>
              {erros.tamanho && (
                <span className="mt-1 text-[11px] text-red-400">
                  {erros.tamanho}
                </span>
              )}
            </div>

            {/* Descrição */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-xs font-medium text-gray-300 mb-1">
                Descrição da Empresa
              </label>
              <textarea
                name="descricao"
                rows="4"
                value={form.descricao}
                onChange={handleChange}
                className="p-3 rounded-xl bg-[#020f0a] border border-[#1f5b39] text-white text-sm outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E]"
              ></textarea>
              {erros.descricao && (
                <span className="mt-1 text-[11px] text-red-400">
                  {erros.descricao}
                </span>
              )}
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
                value={form.senha}
                onChange={handleChange}
                className="p-3 rounded-xl bg-[#020f0a] border border-[#1f5b39] text-white text-sm outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-[#22C55E]"
              />
              {erros.senha && (
                <span className="mt-1 text-[11px] text-red-400">
                  {erros.senha}
                </span>
              )}
              <span className="mt-1 text-[11px] text-gray-400">
                Use uma senha forte. Você poderá alterar essas informações depois no painel.
              </span>
            </div>

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

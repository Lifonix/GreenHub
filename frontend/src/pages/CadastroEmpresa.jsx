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
  });

  const [msg, setMsg] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setMsg("");
    setLoading(true);

    try {
      // aguarda a resposta do backend
      const res = await axios.post("http://localhost:5000/api/empresas", form);

      // mostra mensagem de sucesso (se o backend retornar algo útil, usamos)
      setMsg(res.data?.message || "Empresa cadastrada com sucesso!");
      setErro("");
      setLoading(false);

      // opcional: redireciona para a página de empresas ou home após 1.2s
      setTimeout(() => navigate("/empresas"), 1200);
    } catch (error) {
      // pega mensagem do backend quando disponível
      const backendMsg = error.response?.data?.error || error.response?.data?.message;
      setErro(backendMsg || "Erro ao cadastrar empresa. Verifique os dados e tente novamente.");
      setMsg("");
      setLoading(false);
      console.error("Erro no cadastro da empresa:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1A0D] to-[#112418] text-white py-10 px-4">
      {/* Botão Voltar */}
      <div className="max-w-4xl mx-auto mb-6">
        <button
          onClick={() => navigate("/empresas")}
          className="px-5 py-2 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-medium transition"
        >
          ← Voltar
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-extrabold text-[#4ADE80] text-center">
          Cadastro de Empresa
        </h1>
        <p className="text-center text-gray-300 max-w-xl mx-auto mt-2">
          Registre sua empresa na Lifonix e conecte-se aos melhores talentos do futuro.
        </p>

        {/* FORMULÁRIO - observe o fechamento correto da tag form */}
        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nome da empresa */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1">Nome da Empresa</label>
            <input
              type="text"
              name="nomeEmpresa"
              required
              value={form.nomeEmpresa}
              onChange={handleChange}
              className="p-3 rounded-lg bg-[#14532D]/40 border border-[#4ADE80]/30 text-white outline-none focus:ring-2 focus:ring-[#22C55E]"
            />
          </div>

          {/* CNPJ */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1">CNPJ</label>
            <input
              type="text"
              name="cnpj"
              required
              value={form.cnpj}
              onChange={handleChange}
              className="p-3 rounded-lg bg-[#14532D]/40 border border-[#4ADE80]/30 text-white outline-none focus:ring-2 focus:ring-[#22C55E]"
            />
          </div>

          {/* E-mail */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1">E-mail Corporativo</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="p-3 rounded-lg bg-[#14532D]/40 border border-[#4ADE80]/30 text-white outline-none focus:ring-2 focus:ring-[#22C55E]"
            />
          </div>

          {/* Telefone */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1">Telefone</label>
            <input
              type="text"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              className="p-3 rounded-lg bg-[#14532D]/40 border border-[#4ADE80]/30 text-white outline-none focus:ring-2 focus:ring-[#22C55E]"
            />
          </div>

          {/* Site */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1">Site</label>
            <input
              type="text"
              name="site"
              value={form.site}
              onChange={handleChange}
              className="p-3 rounded-lg bg-[#14532D]/40 border border-[#4ADE80]/30 text-white outline-none focus:ring-2 focus:ring-[#22C55E]"
            />
          </div>

          {/* Setor */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1">Setor</label>
            <input
              type="text"
              name="setor"
              required
              value={form.setor}
              onChange={handleChange}
              className="p-3 rounded-lg bg-[#14532D]/40 border border-[#4ADE80]/30 text-white outline-none focus:ring-2 focus:ring-[#22C55E]"
            />
          </div>

          {/* Tamanho */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm text-gray-300 mb-1">Tamanho da Empresa</label>
            <select
              name="tamanho"
              required
              value={form.tamanho}
              onChange={handleChange}
              className="p-3 rounded-lg bg-[#14532D]/40 border border-[#4ADE80]/30 text-white outline-none focus:ring-2 focus:ring-[#22C55E]"
            >
              <option value="" disabled>Selecione...</option>
              <option value="pequena">Pequena</option>
              <option value="media">Média</option>
              <option value="grande">Grande</option>
            </select>
          </div>

          {/* Descrição */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm text-gray-300 mb-1">Descrição da Empresa</label>
            <textarea
              name="descricao"
              rows="5"
              required
              value={form.descricao}
              onChange={handleChange}
              className="p-3 rounded-lg bg-[#14532D]/40 border border-[#4ADE80]/30 text-white outline-none focus:ring-2 focus:ring-[#22C55E]"
            ></textarea>
          </div>

          {/* Senha */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm text-gray-300 mb-1">Senha de Acesso</label>
            <input
              type="password"
              name="senha"
              required
              value={form.senha}
              onChange={handleChange}
              className="p-3 rounded-lg bg-[#14532D]/40 border border-[#4ADE80]/30 text-white outline-none focus:ring-2 focus:ring-[#22C55E]"
            />
          </div>

          {/* Mensagens */}
          {msg && <p className="text-center text-green-400 font-semibold md:col-span-2">{msg}</p>}
          {erro && <p className="text-center text-red-400 font-semibold md:col-span-2">{erro}</p>}

          {/* Botão */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="px-10 py-3 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white text-lg font-semibold shadow-lg transition disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Cadastrando..." : "Cadastrar Empresa"}
            </button>
          </div>
        </form>
        {/* FIM DO FORMULÁRIO */}
      </div>
    </div>
  );
}

import { useState } from "react";
import axios from "axios";

export default function LoginModal({ onClose, setUser }) {
  const [modo, setModo] = useState("login"); // "login" ou "register"
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setErro("");

    try {
      const url =
        modo === "login"
          ? "http://localhost:5000/api/auth/login"
          : "http://localhost:5000/api/auth/register";

      const payload =
        modo === "login" ? { email, senha } : { nome, email, senha };

      const res = await axios.post(url, payload);
      setUser(res.data.user);
      localStorage.setItem("lifonix-token", res.data.token);
      localStorage.setItem("lifonix-user", JSON.stringify(res.data.user));
      onClose();
    } catch (err) {
      setErro(err.response?.data?.error || "Erro ao conectar com o servidor.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div
        className="bg-white dark:bg-[#1B2E1D] text-gray-800 dark:text-gray-100
                   p-8 rounded-2xl shadow-xl w-80 relative transition"
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-[#22C55E] transition"
        >
          ✕
        </button>

        {/* Título */}
        <h2 className="text-2xl font-bold text-center mb-2 text-[#166534] dark:text-[#4ADE80]">
          {modo === "login" ? "Entrar na Lifonix" : "Cadastrar-se"}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-4">
          {modo === "login"
            ? "Bem-vindo(a) de volta à rede de talentos sustentáveis 🌿"
            : "Junte-se à Lifonix e comece sua jornada profissional verde."}
        </p>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {modo === "register" && (
            <input
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full px-3 py-2 border border-[#A7F3D0] dark:border-[#14532D]
                         bg-[#F0FDF4] dark:bg-[#14532D] rounded-md focus:ring-2
                         focus:ring-[#22C55E] outline-none"
            />
          )}

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-[#A7F3D0] dark:border-[#14532D]
                       bg-[#F0FDF4] dark:bg-[#14532D] rounded-md focus:ring-2
                       focus:ring-[#22C55E] outline-none"
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            className="w-full px-3 py-2 border border-[#A7F3D0] dark:border-[#14532D]
                       bg-[#F0FDF4] dark:bg-[#14532D] rounded-md focus:ring-2
                       focus:ring-[#22C55E] outline-none"
          />

          {erro && (
            <p className="text-red-500 text-sm text-center font-medium">
              {erro}
            </p>
          )}

          <button
            type="submit"
            disabled={carregando}
            className="w-full py-2 rounded-full bg-[#22C55E] hover:bg-[#16A34A]
                       text-white font-semibold transition disabled:opacity-60"
          >
            {carregando
              ? "Carregando..."
              : modo === "login"
              ? "Entrar"
              : "Cadastrar"}
          </button>
        </form>

        {/* Alternar modo */}
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          {modo === "login" ? (
            <p>
              Não tem uma conta?{" "}
              <button
                type="button"
                onClick={() => setModo("register")}
                className="text-[#22C55E] hover:underline font-medium"
              >
                Cadastrar
              </button>
            </p>
          ) : (
            <p>
              Já tem conta?{" "}
              <button
                type="button"
                onClick={() => setModo("login")}
                className="text-[#22C55E] hover:underline font-medium"
              >
                Fazer login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

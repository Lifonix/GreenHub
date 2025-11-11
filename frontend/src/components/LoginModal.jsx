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
        modo === "login"
          ? { email, senha }
          : { nome, email, senha };

      const res = await axios.post(url, payload);
      setUser(res.data.user);
      localStorage.setItem("lifonix-token", res.data.token);
      localStorage.setItem("lifonix-user", JSON.stringify(res.data.user));
      onClose();
    } catch (err) {
      setErro(
        err.response?.data?.error || "Erro ao conectar com o servidor."
      );
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80 relative">
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {modo === "register" && (
            <input
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          )}

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />

          {erro && <p className="text-red-500 text-sm">{erro}</p>}

          <button
            type="submit"
            disabled={carregando}
            className="w-full bg-[#60A5FA] text-white py-2 rounded-md hover:opacity-90 transition"
          >
            {carregando
              ? "Carregando..."
              : modo === "login"
              ? "Entrar"
              : "Cadastrar"}
          </button>
        </form>

        {/* Alternar modo */}
        <div className="mt-4 text-center text-sm text-gray-600">
          {modo === "login" ? (
            <p>
              Não tem uma conta?{" "}
              <button
                type="button"
                onClick={() => setModo("register")}
                className="text-[#60A5FA] font-medium hover:underline"
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
                className="text-[#60A5FA] font-medium hover:underline"
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

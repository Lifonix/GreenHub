import { useState } from "react";
import axios from "axios";

// ✅ Função interna para mapear erros de login/cadastro em mensagens amigáveis
function mapearErroAuth(err, modo) {
  const backendMsg =
    err?.response?.data?.error || err?.response?.data?.message || "";
  const status = err?.response?.status;
  const lower = backendMsg.toLowerCase();

  // Login
  if (modo === "login") {
    if (status === 401 || lower.includes("credenciais inválidas")) {
      return "E-mail ou senha inválidos. Confira os dados e tente novamente.";
    }

    if (
      lower.includes("usuário não encontrado") ||
      lower.includes("usuario nao encontrado")
    ) {
      return "Não encontramos uma conta com este e-mail. Verifique se digitou corretamente ou cadastre-se.";
    }

    if (err.code === "ERR_NETWORK") {
      return "Não foi possível se conectar ao servidor da Lifonix. Verifique sua internet e tente novamente.";
    }

    if (backendMsg) {
      return backendMsg;
    }

    return "Não foi possível fazer login agora. Tente novamente em alguns instantes.";
  }

  // Cadastro
  if (modo === "register") {
    if (status === 409 || (lower.includes("email") && lower.includes("já existe"))) {
      return "Já existe uma conta com este e-mail. Tente fazer login ou recuperar sua senha.";
    }

    if (lower.includes("senha fraca") || lower.includes("password")) {
      return "A senha informada não atende aos requisitos mínimos de segurança. Tente uma senha mais forte.";
    }

    if (err.code === "ERR_NETWORK") {
      return "Não foi possível se conectar ao servidor da Lifonix. Verifique sua internet e tente novamente.";
    }

    if (backendMsg) {
      return backendMsg;
    }

    return "Não foi possível concluir seu cadastro agora. Revise os dados e tente novamente.";
  }

  return backendMsg || "Ocorreu um erro inesperado. Tente novamente.";
}

export default function LoginModal({ onClose, setUser }) {
  const [modo, setModo] = useState("login"); // "login" ou "register"
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [errosCampo, setErrosCampo] = useState({});
  const [carregando, setCarregando] = useState(false);

  // validação local básica
  const validarCampos = () => {
    const novosErros = {};

    if (modo === "register" && !nome.trim()) {
      novosErros.nome = "Informe seu nome completo.";
    }

    if (!email.trim()) {
      novosErros.email = "Informe um e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      novosErros.email = "Digite um e-mail válido.";
    }

    if (!senha.trim()) {
      novosErros.senha = "Informe sua senha.";
    } else if (modo === "register" && senha.length < 6) {
      novosErros.senha = "A senha deve ter pelo menos 6 caracteres.";
    }

    return novosErros;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setErro("");
    setErrosCampo({});

    // validação de front-end
    const novosErros = validarCampos();
    if (Object.keys(novosErros).length > 0) {
      setErrosCampo(novosErros);
      setCarregando(false);
      return;
    }

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
      console.error("Erro em auth:", err);
      const mensagem = mapearErroAuth(err, modo);
      setErro(mensagem);
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
          {modo === "login" ? "Entrar na GreenHub" : "Cadastrar-se"}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-4">
          {modo === "login"
            ? "Bem-vindo(a) de volta à rede de talentos sustentáveis 🌿"
            : "Junte-se à Lifonix e comece sua jornada profissional verde."}
        </p>

        {/* Formulário */}
        <form onSubmit={handleSubmit} noValidate className="space-y-3">
          {modo === "register" && (
            <div className="space-y-1">
              <input
                type="text"
                placeholder="Nome completo"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                  if (errosCampo.nome) {
                    setErrosCampo((prev) => ({ ...prev, nome: "" }));
                  }
                }}
                className="w-full px-3 py-2 border border-[#A7F3D0] dark:border-[#14532D]
                           bg-[#F0FDF4] dark:bg-[#14532D] rounded-md focus:ring-2
                           focus:ring-[#22C55E] outline-none"
              />
              {errosCampo.nome && (
                <p className="text-[11px] text-red-500">{errosCampo.nome}</p>
              )}
            </div>
          )}

          <div className="space-y-1">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errosCampo.email) {
                  setErrosCampo((prev) => ({ ...prev, email: "" }));
                }
              }}
              className="w-full px-3 py-2 border border-[#A7F3D0] dark:border-[#14532D]
                         bg-[#F0FDF4] dark:bg-[#14532D] rounded-md focus:ring-2
                         focus:ring-[#22C55E] outline-none"
            />
            {errosCampo.email && (
              <p className="text-[11px] text-red-500">{errosCampo.email}</p>
            )}
          </div>

          <div className="space-y-1">
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
                if (errosCampo.senha) {
                  setErrosCampo((prev) => ({ ...prev, senha: "" }));
                }
              }}
              className="w-full px-3 py-2 border border-[#A7F3D0] dark:border-[#14532D]
                         bg-[#F0FDF4] dark:bg-[#14532D] rounded-md focus:ring-2
                         focus:ring-[#22C55E] outline-none"
            />
            {errosCampo.senha && (
              <p className="text-[11px] text-red-500">{errosCampo.senha}</p>
            )}
          </div>

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
                onClick={() => {
                  setErro("");
                  setErrosCampo({});
                  setModo("register");
                }}
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
                onClick={() => {
                  setErro("");
                  setErrosCampo({});
                  setModo("login");
                }}
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

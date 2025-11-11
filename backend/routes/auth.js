import express from "express";

const router = express.Router();

// "Banco" de usuários simulados em memória
let usuarios = [
  { id: 1, nome: "Administrador Lifonix", email: "admin@lifonix.com", senha: "123456" },
  { id: 2, nome: "Recrutador FIAP", email: "recrutador@fiap.com", senha: "fiap2025" },
];

// LOGIN
router.post("/login", (req, res) => {
  const { email, senha } = req.body;
  const usuario = usuarios.find((u) => u.email === email && u.senha === senha);

  if (!usuario) {
    return res.status(401).json({ error: "E-mail ou senha incorretos." });
  }

  const token = `fake-jwt-${usuario.id}-${Date.now()}`;
  res.json({
    token,
    user: { id: usuario.id, nome: usuario.nome, email: usuario.email },
  });
});

// CADASTRO
router.post("/register", (req, res) => {
  const { nome, email, senha } = req.body;
  const existente = usuarios.find((u) => u.email === email);

  if (existente) {
    return res.status(400).json({ error: "E-mail já cadastrado." });
  }

  const novoUsuario = {
    id: usuarios.length + 1,
    nome,
    email,
    senha,
  };
  usuarios.push(novoUsuario);

  const token = `fake-jwt-${novoUsuario.id}-${Date.now()}`;
  res.status(201).json({
    token,
    user: { id: novoUsuario.id, nome, email },
  });
});

export default router;

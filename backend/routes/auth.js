import express from "express";

const router = express.Router();

// Usuários simulados
const usuarios = [
  { id: 1, nome: "Administrador Lifonix", email: "admin@lifonix.com", senha: "123456" },
  { id: 2, nome: "Recrutador FIAP", email: "recrutador@fiap.com", senha: "fiap2025" },
];

// Login simples
router.post("/login", (req, res) => {
  const { email, senha } = req.body;

  const usuario = usuarios.find(
    (u) => u.email === email && u.senha === senha
  );

  if (!usuario) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  const token = `fake-jwt-${usuario.id}-${Date.now()}`;
  res.json({
    token,
    user: {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    },
  });
});

export default router;

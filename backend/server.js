import express from "express";
import cors from "cors";
import profilesRoutes from "./routes/profiles.js";
import authRoutes from "./routes/auth.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/profissionais", profilesRoutes);
app.use("/api/auth", authRoutes);

// Rota padrão
app.get("/", (req, res) => {
  res.send("🚀 API Lifonix ativa e rodando com sucesso!");
});

// Iniciar servidor
app.listen(PORT, () =>
  console.log(`✅ Servidor Lifonix rodando em http://localhost:${PORT}`)
);

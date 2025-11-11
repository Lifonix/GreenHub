import authRoutes from "./routes/auth.js";

const express = require("express");
const cors = require("cors");
const app = express();

// Middlewares
app.use("/api", authRoutes);
app.use(cors());
app.use(express.json());

// Importar rotas
const profilesRouter = require("./routes/profiles");

// Usar rotas
app.use("/api/profissionais", profilesRouter);

// Porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Lifonix API rodando na porta ${PORT} (modo leitura)`)
);

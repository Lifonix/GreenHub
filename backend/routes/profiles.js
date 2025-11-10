import express from "express";
import cors from "cors";
import profilesRoutes from "./routes/profiles.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/profissionais", profilesRoutes);

app.get("/", (req, res) => {
  res.send("API Futuro do Trabalho — backend ativo");
});

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});

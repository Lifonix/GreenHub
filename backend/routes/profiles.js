import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "../data/profiles.json");

// GET /profiles
router.get("/", (req, res) => {
  fs.readFile(dataPath, "utf-8", (err, data) => {
    if (err) {
      console.error("Erro ao ler o JSON:", err);
      return res.status(500).json({ error: "Erro ao carregar dados" });
    }
    const profiles = JSON.parse(data);
    res.json(profiles);
  });
});

export default router;

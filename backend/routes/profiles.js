const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs-extra");

const DATA_PATH = path.join(__dirname, "..", "data", "profiles.json");


function readData() {
  if (!fs.existsSync(DATA_PATH)) return [];
  return fs.readJsonSync(DATA_PATH);
}


router.get("/", (req, res) => {
  const { q, area, cidade, tech } = req.query;
  let data = readData();

  if (q) {
    const query = q.toLowerCase();
    data = data.filter(
      (p) =>
        p.nome.toLowerCase().includes(query) ||
        (p.cargo && p.cargo.toLowerCase().includes(query)) ||
        (p.resumo && p.resumo.toLowerCase().includes(query))
    );
  }

  if (area) data = data.filter((p) => p.area?.toLowerCase() === area.toLowerCase());

  if (cidade)
    data = data.filter((p) =>
      p.localizacao?.toLowerCase().includes(cidade.toLowerCase())
    );

  if (tech)
    data = data.filter(
      (p) =>
        Array.isArray(p.habilidadesTecnicas) &&
        p.habilidadesTecnicas.some((t) => t.toLowerCase() === tech.toLowerCase())
    );

  res.json(data);
});

router.get("/:id", (req, res) => {
  const data = readData();
  const profissional = data.find((p) => p.id === req.params.id);
  if (!profissional)
    return res.status(404).json({ message: "Profissional não encontrado" });
  res.json(profissional);
});

module.exports = router;

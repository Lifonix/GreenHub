const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs-extra');

const app = express();
app.use(cors());
app.use(express.json());

const DATA_PATH = path.join(__dirname, 'data', 'profissionais.json');

function readData() {
  if (!fs.existsSync(DATA_PATH)) return [];
  return fs.readJsonSync(DATA_PATH);
}

function writeData(data) {
  fs.writeJsonSync(DATA_PATH, data, { spaces: 2 });
}

// Buscar todos com filtros
app.get('/api/profissionais', (req, res) => {
  const { q, area, cidade, tech } = req.query;
  let data = readData();

  if (q) {
    const query = q.toLowerCase();
    data = data.filter(p =>
      p.nome.toLowerCase().includes(query) ||
      (p.cargo && p.cargo.toLowerCase().includes(query)) ||
      (p.resumo && p.resumo.toLowerCase().includes(query))
    );
  }

  if (area) {
    data = data.filter(p => p.area && p.area.toLowerCase() === area.toLowerCase());
  }

  if (cidade) {
    data = data.filter(p => p.localizacao && p.localizacao.toLowerCase().includes(cidade.toLowerCase()));
  }

  if (tech) {
    data = data.filter(p => Array.isArray(p.habilidadesTecnicas) && p.habilidadesTecnicas.some(t => t.toLowerCase() === tech.toLowerCase()));
  }

  res.json(data);
});

// Buscar por ID
app.get('/api/profissionais/:id', (req, res) => {
  const data = readData();
  const profissional = data.find(p => p.id === req.params.id);
  if (!profissional) return res.status(404).json({ message: 'Profissional não encontrado' });
  res.json(profissional);
});

// Adicionar novo
app.post('/api/profissionais', (req, res) => {
  const data = readData();
  const novo = req.body;
  data.push(novo);
  writeData(data);
  res.status(201).json(novo);
});

// Atualizar
app.put('/api/profissionais/:id', (req, res) => {
  const data = readData();
  const idx = data.findIndex(p => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: 'Profissional não encontrado' });
  data[idx] = { ...data[idx], ...req.body };
  writeData(data);
  res.json(data[idx]);
});

// Deletar
app.delete('/api/profissionais/:id', (req, res) => {
  let data = readData();
  data = data.filter(p => p.id !== req.params.id);
  writeData(data);
  res.json({ message: 'Removido' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Lifonix backend rodando na porta ${PORT}`));

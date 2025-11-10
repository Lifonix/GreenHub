const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();
const dataPath = path.join(__dirname, '../data/profissionais.json');

// GET - listar todos
router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  res.json(data);
});

// GET - buscar por ID
router.get('/:id', (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const profissional = data.find(p => p.id === req.params.id);
  if (!profissional) return res.status(404).json({ message: 'Profissional não encontrado' });
  res.json(profissional);
});

// POST - adicionar novo profissional
router.post('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const novo = { id: uuidv4(), ...req.body };
  data.push(novo);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  res.status(201).json(novo);
});

module.exports = router;

// backend/routes/recomendacoes.js
import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

// caminho para backend/data/recomendados.json
const __dirnameLocal = path.resolve();
const RECOMENDADOS_PATH = path.join(__dirnameLocal, "data", "recomendados.json");

// helper para ler o JSON
function lerRecomendados() {
  try {
    const raw = fs.readFileSync(RECOMENDADOS_PATH, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Erro ao ler recomendados.json:", err);
    return { perfisRecomendados: [] };
  }
}

// helper para salvar no JSON
function salvarRecomendados(data) {
  fs.writeFileSync(RECOMENDADOS_PATH, JSON.stringify(data, null, 2), "utf-8");
}

/**
 * POST /api/recomendacoes
 * body esperado: { profile: { id, nome, ... } }
 * Adiciona um perfil à lista de recomendados (se ainda não estiver).
 */
router.post("/", (req, res) => {
  try {
    const { profile } = req.body;

    if (!profile || !profile.id) {
      return res
        .status(400)
        .json({ error: "Perfil inválido. É necessário enviar profile.id." });
    }

    const data = lerRecomendados();

    const jaExiste = data.perfisRecomendados.some(
      (p) => String(p.id) === String(profile.id)
    );

    if (jaExiste) {
      return res
        .status(200)
        .json({ message: "Perfil já estava recomendado.", profile });
    }

    data.perfisRecomendados.push({
      ...profile,
      recomendadoEm: new Date().toISOString(),
    });

    salvarRecomendados(data);

    return res
      .status(201)
      .json({ message: "Perfil recomendado e salvo com sucesso.", profile });
  } catch (err) {
    console.error("Erro ao salvar recomendação:", err);
    return res
      .status(500)
      .json({ error: "Erro interno ao salvar recomendação." });
  }
});

/**
 * GET /api/recomendacoes
 * Lista todos os perfis recomendados.
 */
router.get("/", (req, res) => {
  try {
    const data = lerRecomendados();
    res.json(data.perfisRecomendados || []);
  } catch (err) {
    console.error("Erro ao listar recomendados:", err);
    res.status(500).json({ error: "Erro ao listar recomendados." });
  }
});

/**
 * DELETE /api/recomendacoes/:id
 * Remove UM perfil específico da lista de recomendados.
 */
router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ error: "ID é obrigatório para remover recomendação." });
    }

    const data = lerRecomendados();
    const antes = data.perfisRecomendados.length;

    // filtra tirando o perfil com aquele id
    data.perfisRecomendados = data.perfisRecomendados.filter(
      (p) => String(p.id) !== String(id)
    );

    // se nada mudou, é porque não encontrou o perfil
    if (data.perfisRecomendados.length === antes) {
      return res.status(404).json({ error: "Perfil não encontrado nos recomendados." });
    }

    salvarRecomendados(data);

    return res.json({ message: "Perfil removido dos recomendados com sucesso." });
  } catch (err) {
    console.error("Erro ao remover recomendação:", err);
    return res
      .status(500)
      .json({ error: "Erro interno ao remover recomendação." });
  }
});

/**
 * (Opcional) DELETE /api/recomendacoes
 * Remove TODOS os recomendados de uma vez.
 */
router.delete("/", (req, res) => {
  try {
    const data = lerRecomendados();
    data.perfisRecomendados = [];
    salvarRecomendados(data);
    return res.json({ message: "Todos os recomendados foram removidos." });
  } catch (err) {
    console.error("Erro ao limpar recomendados:", err);
    return res
      .status(500)
      .json({ error: "Erro interno ao limpar recomendados." });
  }
});

export default router;

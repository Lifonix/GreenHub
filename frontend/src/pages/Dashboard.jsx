// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import GreenHubStressChart from "../components/GreenHubStressChart";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#022c22] via-[#052e26] to-[#020617] text-gray-100">
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-6">
        {/* Cabeçalho da página */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#22C55E]">
              GreenHub – Monitoramento de Bem-Estar
            </h1>
            <p className="text-sm text-gray-300 mt-1">
              Acompanhe em tempo real o nível de estresse estimado a partir da
              temperatura, umidade e luminosidade captadas pelo ESP32.
            </p>
          </div>

          {/* Botão para voltar à Home */}
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 rounded-full border border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E]/10 transition text-sm font-medium"
          >
            ← Voltar para Início
          </Link>
        </div>

        {/* Card principal com o gráfico */}
        <section className="bg-[#020617]/60 border border-[#14532D] rounded-2xl p-6 shadow-xl backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold">
                Nível de estresse do trabalhador
              </h2>
              <p className="text-xs text-gray-400">
                O índice é calculado com base em temperatura, umidade e
                luminosidade, variando de 0 (confortável) a 3 (crítico).
              </p>
            </div>

            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/30">
              Dados via Node-RED / ESP32
            </span>
          </div>

          <GreenHubStressChart />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;

// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import GreenHubStressChart from "../components/GreenHubStressChart";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#022c22] via-[#021a16] to-[#020617] text-gray-100">
      {/* Glow de fundo suave */}
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400/10 blur-3xl rounded-full" />
      </div>

      <main className="relative max-w-6xl mx-auto px-4 lg:px-6 py-10 space-y-8">
        {/* Cabeçalho da página */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/40 text-[11px] uppercase tracking-[0.18em] text-emerald-200">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Monitoramento em tempo real
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-emerald-300 drop-shadow-sm">
              WorkWell – Monitoramento de Bem-Estar
            </h1>

            <p className="text-sm md:text-[15px] text-gray-300 max-w-2xl leading-relaxed">
              Visualize o nível de estresse estimado a partir de temperatura, umidade
              e luminosidade captadas pelo ESP32, comparando trabalhadores presenciais
              e em home office em um painel único.
            </p>
          </div>

          {/* Botão para voltar à Home */}
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-emerald-400/70 text-emerald-200 bg-black/10 hover:bg-emerald-500/10 hover:border-emerald-300 transition-colors text-sm font-medium shadow-sm"
          >
            <span className="text-lg">←</span>
            <span>Voltar para início</span>
          </Link>
        </header>

        {/* Cards de resumo (opcional, dá um ar mais dashboard) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 border border-emerald-500/20 rounded-2xl px-4 py-3.5 flex flex-col gap-1.5 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
            <span className="text-[11px] uppercase tracking-[0.16em] text-gray-400">
              Status geral
            </span>
            <span className="text-sm font-semibold text-emerald-300">
              Estresse moderado
            </span>
            <span className="text-[11px] text-gray-400">
              Baseado na média das últimas leituras.
            </span>
          </div>

          <div className="bg-white/5 border border-emerald-500/20 rounded-2xl px-4 py-3.5 flex flex-col gap-1.5 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
            <span className="text-[11px] uppercase tracking-[0.16em] text-gray-400">
              Atualização
            </span>
            <span className="text-sm font-semibold text-emerald-300">
              A cada 5 segundos
            </span>
            <span className="text-[11px] text-gray-400">
              Dados obtidos via Node‑RED / ESP32.
            </span>
          </div>

          <div className="bg-white/5 border border-emerald-500/20 rounded-2xl px-4 py-3.5 flex flex-col gap-1.5 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
            <span className="text-[11px] uppercase tracking-[0.16em] text-gray-400">
              Ambientes
            </span>
            <span className="text-sm font-semibold text-emerald-300">
              Presencial & Home office
            </span>
            <span className="text-[11px] text-gray-400">
              Compare rapidamente as duas realidades.
            </span>
          </div>
        </section>

        {/* Layout com dois cards de gráfico */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1 - Trabalhador presencial */}
          <article className="bg-[#020617]/80 border border-[#14532D] rounded-2xl p-5 lg:p-6 shadow-[0_22px_60px_rgba(0,0,0,0.6)] backdrop-blur-md flex flex-col gap-4">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <h2 className="text-lg md:text-xl font-semibold text-emerald-200">
                  Nível de estresse – Trabalhador presencial
                </h2>
                <p className="text-[11px] md:text-xs text-gray-400 leading-relaxed">
                  Índice calculado com base em temperatura, umidade e luminosidade
                  no ambiente físico da empresa, variando de 0 (confortável) a 3
                  (crítico).
                </p>
              </div>

              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] md:text-[11px] bg-emerald-500/10 text-emerald-300 border border-emerald-400/40">
                <span className="mr-1 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Node‑RED / ESP32
              </span>
            </div>

            <div className="w-full h-72 md:h-80 lg:h-80 xl:h-96 mt-1">
              <GreenHubStressChart />
            </div>
          </article>

          {/* Card 2 - Trabalhador home office */}
          <article className="bg-[#020617]/80 border border-[#14532D] rounded-2xl p-5 lg:p-6 shadow-[0_22px_60px_rgba(0,0,0,0.6)] backdrop-blur-md flex flex-col gap-4">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <h2 className="text-lg md:text-xl font-semibold text-emerald-200">
                  Nível de estresse – Trabalhador home office
                </h2>
                <p className="text-[11px] md:text-xs text-gray-400 leading-relaxed">
                  Representa um segundo ambiente monitorado (home office). Neste
                  momento, os dados usam o mesmo fluxo de estresse do Node‑RED,
                  mas podem ser separados por endpoint quando necessário.
                </p>
              </div>

              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] md:text-[11px] bg-emerald-500/10 text-emerald-300 border border-emerald-400/40">
                <span className="mr-1 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Node‑RED / ESP32
              </span>
            </div>

            <div className="w-full h-72 md:h-80 lg:h-80 xl:h-96 mt-1">
              <GreenHubStressChart />
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
